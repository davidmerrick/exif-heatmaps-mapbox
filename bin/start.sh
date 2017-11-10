#!/bin/bash

if [[ -z $MAPBOX_TOKEN ]]
then
    echo "ERROR: $MAPBOX_TOKEN is not set. Set this in your .env file."
    exit 1
fi

echo $MAPBOX_TOKEN > /usr/share/nginx/html/mapbox_api_key

# Execute default nginx container command
nginx -g "daemon off;"