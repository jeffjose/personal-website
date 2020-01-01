#!/usr/bin/env python3

import pathlib as path
from dateutil import parser
import yaml

print('-------------------')
print('Running build_blog_index.py')
print('-------------------')

BLOG_DIR = '../blog'
INDEX = BLOG_DIR + '/index-blog.yaml'
DEV_INDEX = './artifacts/index-blog-dev.yaml'

GITHUB_URL = 'https://raw.githubusercontent.com/jeffjose/personal-website/master/blog'


def find_dt(post):
    lines = post.read_text().split()

    dt = lines[lines.index('[.date]') + 1]

    return parser.parse(dt)


def create_index(items):

    items = sorted(items, key=lambda x: find_dt(x), reverse=True)

    return [{"file": f"{GITHUB_URL}/{x.name}"} for x in items]


def write_index(index, file):

    print(yaml.dump(index))
    yaml.dump(index, open(file, 'w'))

    print(f"2/2. Writing dev index: {DEV_INDEX}")
    path.Path(DEV_INDEX).parent.mkdir(parents=True, exist_ok=True)
    yaml.dump(index, open(DEV_INDEX, 'w'))


# Find all blogposts
posts = [
    x for x in path.Path(BLOG_DIR).glob("*.adoc") if not x.name.startswith('_')
]

blog_index = create_index(posts)
print('1/2. Blog index')
write_index(blog_index, INDEX)
