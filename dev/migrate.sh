#!/bin/bash

while [ -z "`netstat -tln | grep 5432`" ]; do
  echo '[/dev/migrate.sh] waiting for database to start'
  sleep 1
done

echo '[/dev/migrate.sh] database up, running migration'
sleep 3

cd backend && yarn knex migrate:latest && yarn knex seed:run

while [ -z "curl localhost:5000" ]; do
  echo '[/dev/migrate.sh] waiting for backend to start'
done

sleep 3

echo "[/dev/migrate.sh] generating graphql types & client"

cd ../shared && yarn generate

echo "[/dev/migrate.sh] finished migrating"
