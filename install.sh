#!/bin/bash
sudo apt install python3 python3-pip python3-venv nodejs npm
sudo npm install -g @angular/cli@9.1.7 npm-check-updates
cd "$(dirname "$(readlink -f "$0")")"/client || exit
npm install
cd ..
python3 -m venv env
source env/bin/activate
cd api || exit
pip install wheel
pip install --upgrade pip
pip install -r requirements.txt
sqlite3 db.sqlite3 < data.sql
export DJANGO_SUPERUSER_USERNAME=admin1
export DJANGO_SUPERUSER_PASSWORD=ADmin12#$
export DJANGO_SUPERUSER_EMAIL=admin1@gmail.com
python manage.py createsuperuser --noinput
