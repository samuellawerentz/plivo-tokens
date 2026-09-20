#!/usr/bin/env bash
# Leak gate. This package is public; it must not name private repos, internal
# branches, or product-specific surface. Also a design check: a token whose name
# only means something inside one product is not a design token.
set -euo pipefail
if grep -rniE 'contacto|ryuk|plivodotcom|phlo|livekit|hodor|sentinel' \
    README.md build.mjs scripts/extract.mjs src/*.json 2>/dev/null; then
  echo "scrub: private-repo or product references found above" >&2
  exit 1
fi
echo "scrub: clean"
