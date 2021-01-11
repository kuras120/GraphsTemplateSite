#!/bin/bash
docker-compose up -d --build
docker-compose exec web python /app/server/manage.py makemigrations
docker-compose exec web python /app/server/manage.py migrate # if error, try 'docker-compose down -v' and rebuild
docker-compose exec web python /app/server/manage.py collectstatic --noinput
docker-compose exec web python /app/server/manage.py createsuperuser --noinput
docker-compose exec db psql -f /app/data.sql
