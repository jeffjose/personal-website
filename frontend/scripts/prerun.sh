#!/bin/bash

echo "----- prerun -------"

pip install --upgrade pip
pip install -r ./scripts/requirements

# Build index for blogs
./scripts/build_blog_index.py

# TODO: Is this really needed when run in cloud-build?
# Create adocs and build book index
./scripts/adoc_from_bookcovers.py

# Create a version from git commit
./scripts/get_git_revision.py

echo "----- end of prerun -------"
