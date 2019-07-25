import os
import datetime, timeago

from flask import Flask, render_template

start = datetime.datetime.now()

app = Flask(__name__, static_url_path="/static/")

@app.route('/hello')
def hello_world():
    now = datetime.datetime.now()

    ago = timeago.format(start, now)

    return 'Started {}.\n Hello World!\n'.format(ago)

@app.route("/", defaults={'path': ''})
@app.route('/<path:path>')
def catchall(path):
    return "{}\n".format(app.open_resource("./dist/homepage/index.html"))
    #return app.send_static_file('./dist/homepage/index.html')

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
