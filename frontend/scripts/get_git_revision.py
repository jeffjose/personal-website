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

    # In cloud-build, we have the same directory structure but no .git.
    # That info is passed in via ENV variables
    if BUILD_CTX == 'cloud-build':
        TAG_NAME = os.environ.get('TAG_NAME', 'defaulttag') if os.environ.get(
            'TAG_NAME', 'defaulttag') else "prod"
        SHORT_SHA = os.environ.get('SHORT_SHA', 'defaultsha')

        return f'{TAG_NAME}-0-g{SHORT_SHA}'
    else:
        return subprocess.check_output(cmd.split()).decode('ascii').strip()


def format(revision):

    try:
        # This will always a local build and never on cloud build
        [tag, noncommitted, sha, _] = revision.split('-')

        tooltip = revision
        display = f"{sha[1:]}-dirty"
        dirty = True

    except:
        # repo is clean
        [tag, noncommitted, sha] = revision.split('-')

        tooltip = revision.replace('-0-', '')
        display = sha[1:]
        dirty = False

    return {
        "revision": revision,
        "display": display,
        "tooltip": f'Built from source - {tooltip}',
        "dirty": dirty,
        "tag": tag
    }


revision = run(CMD)
formatted = format(revision)

print("Git revision")
print(formatted)

json.dump(formatted, open(OUTPUT, 'w'))
