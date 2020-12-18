#!/bin/bash
path="$(dirname "$(readlink -f "$0")")"
client="$path"/../../client
server="$path"/../../server
env="$path"/../../env

# TODO check if venv is active
source "$env"/bin/activate || exit
"$path"/../pyenv/quick_run.sh "$client" "$server"
