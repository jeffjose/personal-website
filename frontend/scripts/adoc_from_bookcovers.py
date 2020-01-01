#!/usr/bin/env python3

import path
from dateutil import parser
import yaml

print('-------------------')
print('Running adoc_from_bookcovers.py')
print('-------------------')

COVERS_DIR = 'static/books/'
INDEX = '../books/index-books.yaml'
ADOC_DIR = '../books/'

GITHUB_URL = 'https://raw.githubusercontent.com/jeffjose/personal-website/master/books/'

ADOC_TEMPLATE = '''= {title}

[.date]
Jan 1, 2020

[.subtitle]
A default subtitle

[.hero]
image::/books/{title}.jpg[]

This is a default description.
'''


def read_index(file):
    return yaml.load(open(file), Loader=yaml.FullLoader)


def write_index(file, contents):
    yaml.dump(contents, open(file, 'w'))


def create_adoc(filename):
    adoc = path.Path(ADOC_DIR) / f"{filename}.adoc"

    adoc.write_text(ADOC_TEMPLATE.format(title=filename))


def find_dt(item):
    filename = item['file'].split('/')[-1]

    adoc = path.Path(ADOC_DIR) / filename

    lines = adoc.lines(retain=False)

    dt = lines[lines.index('[.date]') + 1]

    return parser.parse(dt)


def create_index(index, newitems):

    for item in newitems:
        d = {
            'file': GITHUB_URL + f'{item}.adoc',
            'goodreads': 'https://goodreads.com'
        }

        index.append(d)

    return sorted(index, key=lambda x: find_dt(x), reverse=True)


covers = [x.namebase for x in path.Path(COVERS_DIR).listdir()]
index = read_index(INDEX)

# Create a dict with structure file-name:[Object]
existing_adocs = {
    x['file'].split('/')[-1].replace('.adoc', ''): x
    for x in index
}

new_covers = set(covers).difference(existing_adocs)

print(f'  1/2. Creating {len(new_covers)} adocs')
for new_cover in new_covers:
    create_adoc(new_cover)

new_index = create_index(index, new_covers)

print(f"  2/2. Updating index with {len(new_covers)} items")
write_index(INDEX, new_index)
