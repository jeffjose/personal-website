#!/bin/bash

echo "----- prerun -------"

pip install --upgrade pip
pip install -r ./scripts/requirements

# Build index for blogs
./scripts/build_blog_index.py

# Create adocs and build book index
./scripts/adocs_from_covers.py

# Create a version from git commit
./scripts/get_git_revision.py

echo "----- end of prerun -------"
