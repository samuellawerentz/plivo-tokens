#!/usr/bin/env bash
# dist/ is committed so the package can be installed straight from git, with no
# registry and no build step on the consumer. That only works if the committed
# output matches src — so rebuild and fail on any drift.
set -euo pipefail
node build.mjs > /dev/null
if ! git diff --quiet -- dist; then
  echo "dist is stale — run 'node build.mjs' and commit the result:" >&2
  git --no-pager diff --stat -- dist >&2
  exit 1
fi
echo "dist: in sync with src"
