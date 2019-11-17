#!/bin/bash
cd $(dirname $(readlink -f $0))/client
ng build
cp dist/client/*.js ../server/data/static
cp dist/client/*.js.map ../server/data/static
cd ..
source env/bin/activate
cd server
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000

