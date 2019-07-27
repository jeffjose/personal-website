# Use the official Python image.
# https://hub.docker.com/_/python
FROM python:3.7

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY server/ .
COPY dist/ dist/

# Install production dependencies.
RUN pip install gunicorn sanic

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
CMD exec gunicorn --bind :$PORT --worker-class sanic.worker.GunicornWorker --workers 1 --threads 8 --access-logfile - --error-logfile - --log-level debug app:app
