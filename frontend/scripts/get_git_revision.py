#!/usr/bin/env python3

import os
import subprocess
import path
import json
import datetime

print('-------------------')
print('Running get_git_revision.py')
print('-------------------')

CMD = 'git describe --long --dirty --abbrev=6 --tags'
OUTPUT = './artifacts/meta.json'

BUILD_CTX = os.environ.get('BUILD_CTX', "local")

CURR_TIME = datetime.datetime.utcnow().isoformat()


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


def eget(key):
    return os.environ.get(key, 'fallback')


def format(revision):

    try:
        # This will always a local build and never on cloud build since dirty bit is set
        [tag, noncommitted, sha, _] = revision.split('-')

        tooltip = revision
        display = f"{sha[1:]}-dirty"
        dirty = True

        build_details = {'type': 'local dirty build', 'ctx': BUILD_CTX}

    except:
        # repo is clean
        [tag, noncommitted, sha] = revision.split('-')

        tooltip = revision.replace('-0-', '-')
        display = sha[1:]
        dirty = False

        build_details = {
            'type': 'clean build',
            'ctx': BUILD_CTX,
            "BUILD_ID": eget('BUILD_ID'),
            'COMMIT_SHA': eget('COMMIT_SHA'),
            'REPO_NAME': eget('REPO_NAME'),
            'BRANCH_NAME': eget('BRANCH_NAME'),
            'REVISION_ID': eget('REVISION_ID'),
            'TAG_NAME': eget('TAG_NAME'),
            'SHORT_SHA': eget('SHORT_SHA')
        }

    return {
        "revision": revision,
        "build_time": CURR_TIME,
        "display": display,
        "tooltip": f'Built from source - {tooltip}',
        "dirty": dirty,
        "tag": tag,
        "build_details": build_details
    }


revision = run(CMD)
formatted = format(revision)

print("Git revision")
print(json.dumps(formatted, indent=2))

json.dump(formatted, open(OUTPUT, 'w'))
