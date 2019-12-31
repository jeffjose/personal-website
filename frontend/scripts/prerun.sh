#!/bin/bash

echo "----- prerun -------"

pip install --upgrade pip
pip install -r ./scripts/requirements

# Build index for blogs (done) and books (not implemented)
./scripts/build_index.py

# Create a version from git commit
./scripts/get_git_revision.py

echo "----- end of prerun -------"
