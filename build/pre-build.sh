#!/bin/bash

cd $(dirname $0)

# GitHub の実績を取得する（失敗しても既存の JSON を使って続行する）
node fetch-github-stats.mjs

./sass-compile.sh
./stylelint.sh
