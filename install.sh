#!/bin/bash
sudo apt install python3 python3-venv nodejs npm
sudo npm install -g @angular/cli
cd $(dirname $(readlink -f $0))/client
npm install
cd ..
python3 -m venv env
source env/bin/activate
cd server
pip install -r requirements.txt

