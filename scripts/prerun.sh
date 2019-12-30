#!/bin/bash

echo "----- prerun -------"

pip install --upgrade pip
pip install -r requirements

# Build index for blogs (done) and books (not implemented)
./build_index.py
echo "----- end of prerun -------"
