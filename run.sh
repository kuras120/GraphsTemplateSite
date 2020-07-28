#!/bin/bash
cd "$(dirname "$(readlink -f "$0")")"/client || exit
ng build
cp dist/client/*.js ../server/storage/static
cp dist/client/*.js.map ../server/storage/static
cp -R dist/client/static/* ../server/storage/static
cd ..
source env/bin/activate
cd server || exit
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py runserver 0.0.0.0:8000
