#!/bin/bash
client=$1
server=$2

npm run build --prefix "$client"
mkdir "$server"/storage/static
cp "$client"/dist/client/*.js "$server"/storage/static
cp "$client"/dist/client/*.css "$server"/storage/static
cp -R "$client"/dist/client/static/* "$server"/storage/static
python "$server"/manage.py makemigrations
python "$server"/manage.py migrate
python "$server"/manage.py collectstatic --noinput
gunicorn --bind 0.0.0.0:8000 --chdir "$server" entrypoint.wsgi:application
