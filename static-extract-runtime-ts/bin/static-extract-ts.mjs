#!/usr/bin/env node

const USAGE = `Usage: static-extract-ts <command> [options]

Commands:
  run       Run SER rules against TypeScript-family source.
  --help    Show this help.

Run options:
  --project <dir>      Project root.
  --source <path>      Source file or directory. Can be repeated.
  --rule <file>        SER rule file. Can be repeated.
  --rules <dir>        Directory containing .ser rule files. Can be repeated.
  --builtin            Load rules owned by this TypeScript runtime.
  --out <file>         Optional JSONL output file.
`;

function main(argv) {
  const command = argv[0];
  if (!command || command === "--help" || command === "-h") {
    process.stdout.write(USAGE);
    return 0;
  }
  if (command !== "run") {
    writeError(`Unknown command: ${command}`);
    return 1;
  }
  writeError("static-extract-ts runtime extraction is not implemented yet.");
  return 1;
}

function writeError(message) {
  process.stderr.write(JSON.stringify({
    status: "ERROR",
    message
  }) + "\n");
}

process.exitCode = main(process.argv.slice(2));

