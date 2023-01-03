FROM python:3.8.3-alpine

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY client client
COPY server server

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev nodejs npm

RUN npm install -g @angular/cli@9.1.7 npm-check-updates
RUN npm install --prefix client
RUN npm audit fix --prefix client
RUN npm run build --prefix client

#RUN mkdir server/storage/static
RUN cp client/dist/client/*.js server/storage/static
RUN cp client/dist/client/*.css server/storage/static
RUN cp -R client/dist/client/static/* server/storage/static

RUN pip install --upgrade pip
RUN pip install -r server/requirements.txt
