#!/bin/bash
stop_script() {
  set -x
  pkill entr
  exit 0
}

set -x 
trap stop_script SIGINT SIGTERM SIGKILL

echo '[/dev/watch.sh] watching for SQL & schema changes'

find backend/migrations shared/*.graphql | entr -d -p sh -c 'supervisorctl -c dev/supervisor.cfg restart database migrate'
