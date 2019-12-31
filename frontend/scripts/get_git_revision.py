#!/usr/bin/env python3

import os
import subprocess
import path
import json

print('-------------------')
print('Running get_git_revision.py')
print('-------------------')

CMD = 'git describe --long --dirty --abbrev=6 --tags'
OUTPUT = './meta'

BUILD_CTX = os.environ.get('BUILD_CTX', "local")


def run(cmd):

    if BUILD_CTX == 'cloud-build':

        TAG_NAME = os.environ.get('TAG_NAME', 'tag')
        SHORT_SHA = os.environ.get('SHORT_SHA', 'shortsha')

        return f'{TAG_NAME}-0-g{SHORT_SHA}'
    else:
        return subprocess.check_output(cmd.split()).decode('ascii').strip()


def format(revision):

    try:
        [tag, noncommitted, sha, dirty] = revision.split('-')

        return {
            "revision": revision,
            "display": f"{sha}-{dirty}",
            "dirty": True
        }
    except:
        # repo is clean
        [tag, noncommitted, sha] = revision.split('-')

        return {"revision": revision, "display": f"{sha}", "dirty": False}


revision = run(CMD)
formatted = format(revision)

print("Git revision")
print(formatted)

json.dump(formatted, open(OUTPUT, 'w'))
