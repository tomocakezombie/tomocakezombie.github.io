#!/bin/bash

##### Global Process

# -e: Abort when error occured
# -u: Detect undefined variables
# -o pipefail: Abort when error occured in the pipeline
set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: $0 YOUR_DOMAIN_NAME"
  exit 1
fi

if !(type npm > /dev/null 2>&1); then
  echo "Please install \`node\` and \`npm\` command."
  exit 1
fi

# Use tmps to cache files during curl processing
tmps=()
trap 'rm -f "${tmps[@]}"' EXIT

BASE_URL="https://astro.debiru.net"
DOMAIN_NAME="$1"

##### Utility

function util_copy_all_files() {
  local fname="${FUNCNAME[0]}"
  if [ $# -ne 2 ]; then
    echo "[$fname] Require 2 arguments."
    exit 1
  fi
  local src_dir="$1"
  local dst_dir="$2"
  rsync -a "${src_dir}/" "${dst_dir}/"
}

function util_mv_dir_all_files() {
  local fname="${FUNCNAME[0]}"
  if [ $# -ne 2 ]; then
    echo "[$fname] Require 2 arguments."
    exit 1
  fi
  local src_dir="$1"
  local dst_dir="$2"
  [ -d "$src_dir" ] && util_copy_all_files "$src_dir" "$dst_dir" && rm -r "$src_dir"
}

function util_apply_patch() {
  tmp=$(mktemp)
  tmps+=("$tmp")
  curl -fsSL "${BASE_URL}/build/patch/$1" -o "$tmp"
  # Delete any files that will be created by the patch
  awk '/^diff --git /{p=$4;sub(/^b\//,"",p);n=0}/^new file mode/{n=1}n&&p{print p;n=0}' < "$tmp" | sort -u | xargs -r rm -f --
  git apply --allow-empty --quiet "$tmp"
}

function util_grep_all() {
  local content=$(cat)
  local s
  for s in "$@"; do
    grep -Fq -- "$s" <<< "$content" || return 1
  done
}

function util_git_status() {
  git status --porcelain
}

function util_assert_missing_files() {
  local f
  for f in "$@"; do [[ -e "$f" ]] && return 1; done
  return 0
}

function util_assert_missing_grep() {
  ! util_grep_all "$@"
}

function util_assert_git_status_clean() {
  [[ -z "$(util_git_status)" ]]
}

function util_assert_git_status_grep() {
  util_git_status | util_grep_all "$@"
}

function util_git_commit_if() {
  local fname="${FUNCNAME[0]}"
  if [ $# -lt 2 ]; then
    printf "$fname"
    printf ' "%s"' "$@" && echo
    echo "[$fname] Require 2 arguments."
    exit 1
  fi

  local commit_message="$1"
  shift

  git add .
  util_assert_git_status_grep "$@" || return 1
  git commit --quiet -m "$commit_message"
}

##### Main Process

function step_1() {
  ### 1. Generate Astro Project
  local target_file="package.json"
  util_assert_missing_files "$target_file" || return 1

  local tmp_dir=".astro_tmp_dir_$(date '+%Y%m%d-%H%M%S')"
  npm create astro@latest "$tmp_dir" -- --template minimal --no-install --no-git
  [ -d "$tmp_dir" ] && rm -f "${tmp_dir}/README.md"
  util_mv_dir_all_files "$tmp_dir" .

  # Set EOL
  perl -i -pe '$_ .= "\n" unless /\n\z/' "$target_file"
  # Set project name
  perl -i -pe 's@^  "name": "[^"]*"@  "name": "astro-project"@smg' "$target_file"

  util_git_commit_if "$1" "$target_file"
}

function step_2() {
  ### 2. Update .gitignore
  local target_file=".gitignore"
  # Set gitignore "dist/" only root directory
  perl -i -pe 's@^dist/$@/dist/@smg' "$target_file"
  util_git_commit_if "$1" "$target_file"
}

function step_3() {
  ### 3. Generate deploy.yml
  local target_file=".github/workflows/deploy.yml"
  util_apply_patch "deploy.yml.patch"
  # Remove comment lines
  perl -i -ne 'next if /^[ \t]*#/; s/[ \t]+#.*$//; print' "$target_file"
  util_git_commit_if "$1" "$target_file"
}

function step_4() {
  ### 4. Remove src/* files
  local target_file="src/.gitkeep"
  util_assert_missing_files "$target_file" || return 1

  [ -d "src" ] && rm -r src
  [ ! -e "src" ] && mkdir src && touch "$target_file"

  util_git_commit_if "$1" "$target_file"
}

function step_5() {
  ### 5. Add npm commands into package.json
  local target_file="package.json"
  local grep_texts=('"dev": "npm run disableDevToolbar && astro dev",')
  util_assert_missing_grep "${grep_texts[@]}" < "$target_file" || return 1
  util_apply_patch "package.json.patch"
  util_git_commit_if "$1" "$target_file"
}

function step_6() {
  ### 6. Add template data as text files
  local target_file="src/config/astro.mjs"
  util_assert_missing_files "$target_file" || return 1
  util_apply_patch "starter-kit.patch"
  # Set domain name
  perl -i -pe "s@site: '[^']*'@site: 'https://${DOMAIN_NAME}'@smg" "$target_file"
  util_git_commit_if "$1" "$target_file"
}

function step_7() {
  ### 7. Add template data as binary files
  local target_file="public/assets/img/"
  util_assert_missing_files "$target_file" || return 1
  util_apply_patch "starter-kit-binary.patch"
  util_git_commit_if "$1" "$target_file"
}

function step_8() {
  ### 8. Install npm modules
  local target_file="package.json"
  local node_modules=(glob js-beautify sass stylelint stylelint-config-standard prettier prettier-plugin-astro)
  util_assert_missing_grep "${node_modules[@]}" < "$target_file" || return 1
  npm install -D "${node_modules[@]}"
  util_git_commit_if "$1" "$target_file"
}

function step_9() {
  ### 9. Run npm build
  local target_file="astro.json"
  util_assert_missing_files "$target_file" || return 1
  npm run build
  util_git_commit_if "$1" "$target_file"
}

function exec_step() {
  local fname="${FUNCNAME[0]}"
  if [ $# -ne 2 ]; then
    echo "[$fname] Require 2 arguments."
    exit 1
  fi

  local func_name="$1"
  local commit_message="$2"

  if ! util_assert_git_status_clean; then
    echo "[$fname] Working tree is not clean. Abort $func_name function."
    exit 1
  fi

  # Execute step function
  if ! "$func_name" "$commit_message"; then
    echo "[$fname] $func_name skipped."
    return 0
  fi

  echo "[$fname] $func_name executed."
}

exec_step step_1 "(ask-1) npm create astro@latest"
exec_step step_2 "(ask-2) update .gitignore"
exec_step step_3 "(ask-3) add .github/workflows/deploy.yml"
exec_step step_4 "(ask-4) remove default src files"
exec_step step_5 "(ask-5) add npm commands into package.json"
exec_step step_6 "(ask-6) add template data as text files"
exec_step step_7 "(ask-7) add template data as binary files"
exec_step step_8 "(ask-8) install npm modules"
exec_step step_9 "(ask-9) npm run build"
