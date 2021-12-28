#!/bin/sh
set -x

stop_script() {
  set -x
  pkill docker-compose
  docker-compose -f backend/docker-compose.yml down
  exit 0
}

docker-compose -f backend/docker-compose.yml down

trap stop_script SIGINT SIGTERM 

docker-compose -f backend/docker-compose.yml up &

set +x
while true; do
  sleep 1
done
