#!/bin/bash
docker exec load_test k6 run /app/dist/k6-playground.umd.js
