#!/bin/bash

echo "----- prerun -------"

pip install --upgrade pip
pip install -r requirements

# Build index for blogs (done) and books (not implemented)
./build_index.py

# Create a version from git commit
./get_git_revision.py

echo "----- end of prerun -------"
