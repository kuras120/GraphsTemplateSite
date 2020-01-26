#!/bin/bash
cd $(dirname $(readlink -f $0))/client
ng build
cp dist/client/*.js ../server/storage/static
cp dist/client/*.js.map ../server/storage/static
cd ..
source env/bin/activate
cd server
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000

