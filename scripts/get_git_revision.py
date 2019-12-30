#!/usr/bin/env python3

import subprocess
import path
import json

print('-------------------')
print('Running get_git_revision.py')
print('-------------------')

CMD = 'git describe --long --dirty --abbrev=6 --tags'
OUTPUT = '../meta'


def run(cmd):

    return subprocess.check_output(cmd.split()).decode('ascii').strip()


def format(revision):

    [tag, noncommitted, sha, dirty] = revision.split('-')

    return {"revision": revision, "display": f"{sha}-{dirty}"}


revision = run(CMD)
formatted = format(revision)

print("Git revision")
print(formatted)

json.dump(formatted, open(OUTPUT, 'w'))
