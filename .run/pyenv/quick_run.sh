#!/bin/bash
client=$1
server=$2
url=$3
port=$4

npm run build --prefix "$client"
cp "$client"/dist/client/*.js "$server"/storage/static
cp "$client"/dist/client/*.css "$server"/storage/static
cp -R "$client"/dist/client/static/* "$server"/storage/static
python "$server"/manage.py makemigrations
python "$server"/manage.py migrate
python "$server"/manage.py collectstatic --noinput
gunicorn --bind "$url":"$port" --chdir "$server" entrypoint.wsgi:application
