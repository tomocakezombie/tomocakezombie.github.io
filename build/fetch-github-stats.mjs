// GitHub の実績（コントリビューション数・公開リポジトリ数・スター数・草）を取得して
// src/data/github-stats.json に書き出す（npm run build の最初に pre-build.sh から呼ばれる）
//
// - トークンは環境変数 GITHUB_TOKEN（無ければ GH_TOKEN）。CI では Actions の GITHUB_TOKEN を渡している
// - トークンが無い・API が失敗したときは、既存の JSON をそのまま残して警告だけ出す（ビルドは止めない）
// - JSON は git に載せる。取得できなかったときのフォールバックになる
// - 公開リポジトリ数・スター数は fork を除いた自分のリポジトリだけを数える

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outFile = join(root, 'src/data/github-stats.json');
const login = 'tomocakezombie';
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

// contributionLevel を 0〜4 の数値にする（JSON を小さくし、表示側で扱いやすくする）
const levels = ['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'];

const query = `
  query ($login: String!, $cursor: String) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
      repositories(first: 100, after: $cursor, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          stargazerCount
        }
      }
    }
  }
`;

const request = async (cursor) => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': `${login}-portfolio-build`,
    },
    body: JSON.stringify({ query, variables: { login, cursor } }),
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
  const json = await response.json();
  if (json.errors?.length) throw new Error(json.errors.map((error) => error.message).join(' / '));
  if (!json.data?.user) throw new Error(`ユーザー ${login} が見つかりません`);
  return json.data.user;
};

const fetchStats = async () => {
  // 1 ページ目でカレンダーとリポジトリの先頭 100 件を取り、残りはリポジトリだけページをめくる
  const first = await request(null);
  const calendar = first.contributionsCollection.contributionCalendar;
  const repos = first.repositories;

  let stars = repos.nodes.reduce((sum, repo) => sum + repo.stargazerCount, 0);
  let { hasNextPage, endCursor } = repos.pageInfo;
  while (hasNextPage) {
    const page = (await request(endCursor)).repositories;
    stars += page.nodes.reduce((sum, repo) => sum + repo.stargazerCount, 0);
    ({ hasNextPage, endCursor } = page.pageInfo);
  }

  return {
    login,
    fetchedAt: new Date().toISOString(),
    totalContributions: calendar.totalContributions,
    publicRepos: repos.totalCount,
    stars,
    // weeks[週][曜日]。先頭の週は日曜始まりとは限らない（表示側で空きマスを詰める）
    weeks: calendar.weeks.map((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: Math.max(0, levels.indexOf(day.contributionLevel)),
      })),
    ),
  };
};

// ---- main ---------------------------------------------------------------
if (!token) {
  console.warn('警告 GITHUB_TOKEN / GH_TOKEN が無いため GitHub の実績を取得しません（既存の src/data/github-stats.json を使います）');
} else {
  try {
    const stats = await fetchStats();
    mkdirSync(dirname(outFile), { recursive: true });
    // 1 日分を 1 行にまとめて、git の差分を読みやすくする
    const json = JSON.stringify(stats, null, 2).replace(/\{\s+("date"[^{}]*?)\s+\}/g, (_, body) => `{ ${body.replace(/,\s+/g, ', ')} }`);
    writeFileSync(outFile, `${json}\n`);
    console.log(
      `GitHub の実績を ${outFile.replace(`${root}/`, '')} に書き出しました` +
        `（コントリビューション ${stats.totalContributions} / 公開リポジトリ ${stats.publicRepos} / スター ${stats.stars}）`,
    );
  } catch (error) {
    console.warn(`警告 GitHub の実績を取得できませんでした（既存の src/data/github-stats.json を使います）: ${error.message}`);
  }
}
