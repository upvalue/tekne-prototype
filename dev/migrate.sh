#!/bin/bash

while [ -z "`netstat -tln | grep 5432`" ]; do
  echo '[/dev/migrate.sh] waiting for database to start'
  sleep 1
done
echo '[/dev/migrate.sh] database up, running migration'
sleep 3

cd backend && yarn knex migrate:latest

