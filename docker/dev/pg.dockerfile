FROM postgres:12.0-alpine

WORKDIR /app

COPY server/data.sql .
