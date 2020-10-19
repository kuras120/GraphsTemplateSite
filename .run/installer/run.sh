#!/bin/bash
path="$(dirname "$(readlink -f "$0")")"
client="$path"/../../client
server="$path"/../../server
env="$path"/../../env

npm run build --prefix "$client"
cp "$client"/dist/client/*.js "$server"/storage/static
cp "$client"/dist/client/*.js.map "$server"/storage/static
cp -R "$client"/dist/client/static/* "$server"/storage/static

# shellcheck source=/dev/null
source "$env"/bin/activate
python "$server"/manage.py makemigrations
python "$server"/manage.py migrate
python "$server"/manage.py collectstatic --noinput

gunicorn --bind 0.0.0.0:8000 --chdir "$server" entrypoint.wsgi:application
