// iPhone のヘルスケアから書き出したデータ（書き出したデータ.zip）を読み、
// 直近 30 日のワークアウトと VO2max を集計して src/data/health-stats.json に書き出す
//
// 使い方：書き出したデータ.zip をリポジトリ直下に置いて（前回のものは上書きして）npm run health
//   別の場所の zip や、展開したあとの xml を使うときは npm run health -- <パス>
//
// - JSON には集計した数値だけを書く（日時・心拍・GPS ルートなどは載せない）
// - zip は .gitignore で除外している（個人の健康データがまるごと入っているため、git に載せない）
// - 期間の終わりは書き出した日（ExportDate）。書き出しが古いと、そのぶん古い 30 日になる

import { spawn, execFileSync } from 'node:child_process';
import { createReadStream, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outFile = join(root, 'src/data/health-stats.json');
const DAYS = 30;

// 筋トレとして数えるワークアウトの種類（Apple Watch の「機能的筋力トレーニング」など）
const strengthTypes = [
  'HKWorkoutActivityTypeTraditionalStrengthTraining',
  'HKWorkoutActivityTypeFunctionalStrengthTraining',
  'HKWorkoutActivityTypeCoreTraining',
];
const runningType = 'HKWorkoutActivityTypeRunning';

// 引数がなければ、リポジトリ直下の zip を使う（AirDrop で受け取ったファイル名は濁点が分かれていることがあるので NFC にそろえて比べる）
const defaultNames = ['書き出したデータ.zip', 'export.zip'];
const defaultInput = readdirSync(root).find((name) => defaultNames.includes(name.normalize('NFC')));
const input = process.argv[2] ?? (defaultInput && join(root, defaultInput));
if (!input) {
  console.error(`リポジトリ直下に ${defaultNames.join(' か ')} を置くか、npm run health -- <zip または xml のパス> で指定してください`);
  process.exit(1);
}

// zip の中の本体の xml（英語環境では export.xml）を探して、展開せずに 1 行ずつ読む
// unzip は日本語のファイル名が化けるため、macOS 標準の bsdtar を使う
const openLines = () => {
  if (!input.endsWith('.zip')) return createReadStream(input);
  const entries = execFileSync('bsdtar', ['-tf', input], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).split('\n');
  const entry = entries.find((name) => /^apple_health_export\/[^/]+\.xml$/.test(name) && !name.includes('cda'));
  if (!entry) throw new Error('zip の中に apple_health_export/ の xml が見つかりません');
  return spawn('bsdtar', ['-xOf', input, entry]).stdout;
};

const attrs = (tag) => Object.fromEntries([...tag.matchAll(/(\w+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
// "2026-10-27 07:00:00 +0900" → Date
const parseDate = (value) => new Date(value.replace(' ', 'T').replace(/ ([+-]\d{2})(\d{2})$/, '$1:$2'));
const toMinutes = (value, unit) => Number(value) * ({ s: 1 / 60, min: 1, hr: 60 }[unit] ?? 1);
const toKm = (value, unit) => Number(value) * ({ km: 1, m: 0.001, mi: 1.609344 }[unit] ?? 1);

let exportDate = null;
const workouts = [];
let current = null;
// 心肺機能：Apple Watch が推定した VO2max（最大酸素摂取量）の記録
const vo2max = [];

const lines = createInterface({ input: openLines(), crlfDelay: Infinity });
for await (const line of lines) {
  const text = line.trim();
  if (text.startsWith('<ExportDate ')) {
    exportDate = parseDate(attrs(text).value);
  } else if (text.startsWith('<Workout ')) {
    const a = attrs(text);
    current = {
      type: a.workoutActivityType,
      start: parseDate(a.startDate),
      minutes: toMinutes(a.duration, a.durationUnit),
      // 古い iOS は Workout 自体に totalDistance を持つ。新しい iOS は WorkoutStatistics に入る
      km: a.totalDistance ? toKm(a.totalDistance, a.totalDistanceUnit) : 0,
    };
    workouts.push(current);
    if (text.endsWith('/>')) current = null;
  } else if (current && text.startsWith('<WorkoutStatistics ')) {
    const a = attrs(text);
    if (a.type === 'HKQuantityTypeIdentifierDistanceWalkingRunning' && a.sum) current.km = toKm(a.sum, a.unit);
  } else if (text.startsWith('</Workout>')) {
    current = null;
  } else if (text.startsWith('<Record type="HKQuantityTypeIdentifierVO2Max"')) {
    const a = attrs(text);
    vo2max.push({ start: parseDate(a.startDate), value: Number(a.value) });
  }
}

if (!exportDate) throw new Error('ExportDate が見つかりません。ヘルスケアの書き出しデータか確認してください');

const from = new Date(exportDate.getTime() - DAYS * 24 * 60 * 60 * 1000);
const recent = workouts.filter((w) => w.start >= from && w.start <= exportDate);
const sum = (list, key) => list.reduce((total, w) => total + w[key], 0);
const strength = recent.filter((w) => strengthTypes.includes(w.type));
const running = recent.filter((w) => w.type === runningType);

// VO2max は 30 日の中の平均（1 回の計測のぶれをならす）。30 日に 1 件もなければ null
const recentVo2max = vo2max.filter((r) => r.start >= from && r.start <= exportDate);

const round = (value, digits = 1) => Math.round(value * 10 ** digits) / 10 ** digits;
const stats = {
  updatedAt: exportDate.toISOString(),
  days: DAYS,
  strength: { count: strength.length, minutes: round(sum(strength, 'minutes')) },
  running: { count: running.length, km: round(sum(running, 'km'), 2), minutes: round(sum(running, 'minutes')) },
  vo2max: recentVo2max.length > 0 ? round(sum(recentVo2max, 'value') / recentVo2max.length) : null,
};

writeFileSync(outFile, `${JSON.stringify(stats, null, 2)}\n`);
console.log(`ワークアウト ${workouts.length} 件のうち、直近 ${DAYS} 日を集計しました → ${outFile}`);
console.log(stats);
