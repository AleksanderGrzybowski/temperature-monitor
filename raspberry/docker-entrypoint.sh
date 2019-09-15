#! /bin/bash
set -e

# Since we want to build this image on x86 system,
# npm install won't work at build stage (this is ARM image),
# so we install dependencies at runtime :(
npm install

node index.js
