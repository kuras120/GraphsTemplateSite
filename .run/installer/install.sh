#!/bin/bash
path="$(dirname "$(readlink -f "$0")")"
client="$path"/../../client
server="$path"/../../server
env="$path"/../../env

sudo apt install python3 python3-pip python3-venv nodejs npm
sudo npm install -g @angular/cli@9.1.7 npm-check-updates
npm install --prefix "$client"
python3 -m venv "$env"

# shellcheck source=/dev/null
source "$env"/bin/activate
pip install --install-option="--prefix=$server" wheel
pip install --install-option="--prefix=$server" --upgrade pip
pip install --install-option="--prefix=$server" -r requirements.txt

touch "$server"/db.sqlite3
python "$server"/manage.py migrate
sqlite3 "$server"/db.sqlite3 < "$server"/data.sql

export DJANGO_SUPERUSER_USERNAME=admin1
export DJANGO_SUPERUSER_PASSWORD=ADmin12#$
export DJANGO_SUPERUSER_EMAIL=admin1@gmail.com

python "$server"/manage.py createsuperuser --noinput
