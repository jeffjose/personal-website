#
# Author: Jeffrey Jose | jeffjosejeff@gmail.com
#
from pathlib import Path
import requests
import environs

from sanic import Sanic, response
from sanic_sslify import SSLify

app = Sanic(__name__)
sslify = SSLify(app, subdomains=True)

env = environs.Env()


# Scan through dist/ and figure out what projects are in there
#
def setup_project(app, project):
    app.static(project.name, './dist/{}/index.html'.format(project.name))
    app.static(project.name, './dist/{}'.format(project.name))

projects = [x for x in Path('dist/').iterdir() if x.name != 'homepage']

for project in projects:
    setup_project(app, project)




# Catch-all route to serve index.html or project's index.html
#
@app.route('/')
@app.route('/<path:path>')
async def catch_all(request, path=''):
    try:
        return await response.file('./dist/homepage/{}'.format(path))
    except:
        return await response.file('./dist/homepage/index.html')

if __name__ == '__main__':
    debug = env.bool('DEBUG', True)
    app.run(host='0.0.0.0', port = 8080, debug = debug, access_log = debug)
