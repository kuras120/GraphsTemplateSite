#!/bin/bash
cd "$(dirname "$(readlink -f "$0")")"/client || exit
ng build
cp dist/client/*.js ../api/storage/static
cp dist/client/*.js.map ../api/storage/static
cd ..
source env/bin/activate
cd api || exit
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000
