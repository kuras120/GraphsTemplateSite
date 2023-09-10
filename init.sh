#!/bin/bash
if [ $# -eq 0 ]
  then
    echo "You have to provide argument: dev or prd"
    exit
fi
docker compose -f compose-"$1".yml --env-file .env down -v
docker compose -f compose-"$1".yml --env-file .env up -d --build
docker compose -f compose-"$1".yml exec web python /app/server/manage.py makemigrations
docker compose -f compose-"$1".yml exec web python /app/server/manage.py migrate # if error, try 'docker-compose down -v' and rebuild
docker compose -f compose-"$1".yml exec web python /app/server/manage.py collectstatic --noinput
docker compose -f compose-"$1".yml exec web python /app/server/manage.py createsuperuser --noinput
docker compose -f compose-"$1".yml exec db psql -f /app/data.sql
