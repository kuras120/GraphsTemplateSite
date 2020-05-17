#!/bin/bash
sudo apt install python3 python3-pip python3-venv nodejs npm
sudo npm install -g @angular/cli@8.3.26 npm-check-updates
cd "$(dirname "$(readlink -f "$0")")"/client || exit
npm install
cd ..
python3 -m venv env
source env/bin/activate
cd api || exit
pip install wheel
pip install --upgrade pip
pip install -r requirements.txt
