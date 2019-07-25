import os
import datetime, timeago

from flask import Flask

start = datetime.datetime.now()

app = Flask(__name__)

@app.route('/')
def hello_world():
    now = datetime.datetime.now()

    ago = timeago.format(start, now)

    return 'Started {}.\n Hello World!\n'.format(ago)

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
