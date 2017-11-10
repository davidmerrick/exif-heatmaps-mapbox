#!/bin/bash -eu


echo "Starting Docker container. Listening on http://localhost:$CONTAINER_PORT" 
echo $GOOGLE_MAPS_API_KEY > html/google_maps_api_key
docker run -v $(pwd)/html:/usr/share/nginx/html -p $CONTAINER_PORT:80 nginx:1.10.2
