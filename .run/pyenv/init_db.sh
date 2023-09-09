#!/bin/bash
server=$1

rm "$server"/db.sqlite3
touch "$server"/db.sqlite3
python "$server"/manage.py makemigrations
python "$server"/manage.py migrate
sqlite3 "$server"/db.sqlite3 < "$server"/data.sql
export DJANGO_SUPERUSER_USERNAME=admin1
export DJANGO_SUPERUSER_PASSWORD=ADmin12#$
export DJANGO_SUPERUSER_EMAIL=admin1@gmail.com
python "$server"/manage.py createsuperuser --noinput
