#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BIN_DIR="${JAVA_STATIC_EXTRACT_BIN_DIR:-$HOME/.local/bin}"
INSTALL_CLI=1
INSTALL_SKILLS=1

usage() {
  cat <<'USAGE'
Usage: ./install.sh [options]

Options:
  --bin-dir DIR       Install the java-static-extract command into DIR.
  --no-cli            Do not build or install the CLI command.
  --no-skills         Do not install Codex/Claude skills.
  -h, --help          Show this help.

Environment:
  JAVA_STATIC_EXTRACT_BIN_DIR      Default CLI install directory.
  CODEX_SKILLS_DIR                 Default: ~/.codex/skills
  CLAUDE_SKILLS_DIR                Default: ~/.claude/skills
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --bin-dir)
      BIN_DIR="$2"
      shift 2
      ;;
    --no-cli)
      INSTALL_CLI=0
      shift
      ;;
    --no-skills)
      INSTALL_SKILLS=0
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

install_cli() {
  echo "Building java-static-extract CLI..."
  (cd "$ROOT_DIR" && mvn -pl java-static-extract-cli -am package)

  local source_bin="$ROOT_DIR/java-static-extract-cli/target/appassembler/bin/java-static-extract"
  if [[ ! -x "$source_bin" ]]; then
    echo "CLI script was not generated: $source_bin" >&2
    exit 1
  fi

  mkdir -p "$BIN_DIR"
  ln -sfn "$source_bin" "$BIN_DIR/java-static-extract"
  echo "Installed command: $BIN_DIR/java-static-extract"
}

install_skill_dir() {
  local target_root="$1"
  local source_dir="$ROOT_DIR/skills/java-static-extract"
  local target_dir="$target_root/java-static-extract"

  mkdir -p "$target_root"
  rm -rf "$target_dir"
  cp -R "$source_dir" "$target_dir"
  echo "Installed skill: $target_dir"
}

install_skills() {
  local codex_dir="${CODEX_SKILLS_DIR:-$HOME/.codex/skills}"
  local claude_dir="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"

  install_skill_dir "$codex_dir"
  install_skill_dir "$claude_dir"
}

if [[ "$INSTALL_CLI" -eq 1 ]]; then
  install_cli
fi

if [[ "$INSTALL_SKILLS" -eq 1 ]]; then
  install_skills
fi

cat <<EOF

Done.

Try:
  java-static-extract --help

If the command is not found, add this to your shell profile:
  export PATH="$BIN_DIR:\$PATH"
EOF
