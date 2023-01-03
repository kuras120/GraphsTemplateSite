#!/bin/bash
if [ $# -eq 0 ]
  then
    echo "You have to provide argument: dev or prod"
    exit
fi
docker-compose -f "$1"/docker-compose.yml --env-file "$1"/.env down -v
docker-compose -f "$1"/docker-compose.yml --env-file "$1"/.env up -d --build
docker-compose -f "$1"/docker-compose.yml exec web python /app/server/manage.py makemigrations
docker-compose -f "$1"/docker-compose.yml exec web python /app/server/manage.py migrate # if error, try 'docker-compose down -v' and rebuild
docker-compose -f "$1"/docker-compose.yml exec web python /app/server/manage.py collectstatic --noinput
docker-compose -f "$1"/docker-compose.yml exec web python /app/server/manage.py createsuperuser --noinput
docker-compose -f "$1"/docker-compose.yml exec db psql -f /app/data.sql
read -n 1 -s -r -p "Press any key to continue"
