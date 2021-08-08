#!/bin/bash
path="$(dirname "$(readlink -f "$0")")"
client="$path"/../../client
server="$path"/../../server
env="$path"/../../env

sudo apt install python3 python3-pip python3-venv nodejs npm
sudo npm install -g npm-check-updates
npm install --prefix "$client"
npm audit fix --prefix "$client"
python3 -m venv "$env"
# TODO check if venv is active
source "$env"/bin/activate || exit
pip install wheel
pip install --upgrade pip
pip install -r "$server"/requirements.txt
"$path"/../pyenv/init_db.sh "$server"
