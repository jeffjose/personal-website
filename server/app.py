#
# Author: Jeffrey Jose | jeffjosejeff@gmail.com
#
from pathlib import Path

from sanic import Sanic, response
from sanic_sslify import SSLify

app = Sanic(__name__)
sslify = SSLify(app, subdomains=True)

def setup_project(app, project):
    app.static(project.name, './dist/{}/index.html'.format(project.name))
    app.static(project.name, './dist/{}'.format(project.name))

projects = [x for x in Path('dist/').iterdir() if x.name != 'homepage']

for project in projects:
    setup_project(app, project)

@app.route('/')
@app.route('/<path:path>')
async def catch_all(request, path=''):
    try:
        return await response.file('./dist/homepage/{}'.format(path))
    except:
        return await response.file('./dist/homepage/index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 8080, debug = False, access_log = True)
