Display EXIF data from your photos on a heatmap.

# Getting started

1. Set up a [MapBox account](https://www.mapbox.com/) and login.
2. Grab a MapBox token from [here](https://www.mapbox.com/studio/account/tokens/).
3. Copy the `.env.example` file to `.env`, and paste in your MapBox token.
4. Put your EXIF geoJSON in `html/exif.geojson`.
5. Run `docker-compose build`.
6. Run `docker-compose up`.
7. Load [localhost:8080](http://localhost:8080) in your browser.

