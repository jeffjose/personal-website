#!/bin/bash

pwd

pip install --upgrade pip
pip install -r requirements

./build_index.py
