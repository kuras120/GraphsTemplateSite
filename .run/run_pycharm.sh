#!/bin/bash
path="$(dirname "$(readlink -f "$0")")"
client="$path"/$1
server="$path"/$2

npm run build --prefix "$client"
cp "$client"/dist/client/*.js "$server"/storage/static
cp "$client"/dist/client/*.js.map "$server"/storage/static
cp -R "$client"/dist/client/static/* "$server"/storage/static

python "$server"/manage.py makemigrations
python "$server"/manage.py migrate
python "$server"/manage.py collectstatic --noinput
gunicorn --bind 0.0.0.0:8000 --chdir "$server" entrypoint.wsgi:application