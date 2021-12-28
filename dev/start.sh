#!/bin/bash
# start.sh - runs all components with autorestart
supervisord -n -c dev/supervisor.cfg
