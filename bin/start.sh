#!/bin/bash

if [[ -z $MAPBOX_API_KEY ]]
then
    echo "ERROR: $MAPBOX_API_KEY is not set. Set this in your .env file."
    exit 1
fi

echo $MAPBOX_API_KEY > /usr/share/nginx/html/mapbox_api_key

# Execute default nginx container command
nginx -g "daemon off;"