#!/usr/bin/env python3

import subprocess

CMD = 'git describe --long --dirty --abbrev=6 --tags'


def run(cmd):

    return subprocess.check_output(cmd.split()).decode('ascii').strip()


def format(revision):

    [tag, noncommitted, sha, dirty] = revision.split('-')

    return {"revision": revision, "revdisplay": f"{sha}-{dirty}"}


revision = run(CMD)
formatted = format(revision)
print(revision)
print(formatted)
