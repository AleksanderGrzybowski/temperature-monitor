#! /bin/bash
set -e

# Since we want to build this image on x86 system,
# npm install won't work at build stage (this is ARM image)
npm install

node index.js
