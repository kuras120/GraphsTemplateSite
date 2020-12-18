#!/bin/bash
path="$(dirname "$(readlink -f "$0")")"
client="$path"/../../client
server="$path"/../../server
env="$path"/../../env

sudo apt install python3 python3-pip python3-venv nodejs npm
sudo npm install -g @angular/cli@9.1.7 npm-check-updates
npm install --prefix "$client"
python3 -m venv "$env"
# TODO check if venv is active
source "$env"/bin/activate || exit
pip install --install-option="--prefix=$server" wheel
pip install --install-option="--prefix=$server" --upgrade pip
pip install --install-option="--prefix=$server" -r requirements.txt
"$path"/../pyenv/init_db.sh "$server" "$env"
