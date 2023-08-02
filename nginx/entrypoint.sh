#!/bin/sh

# Replace environment variables in the template and save it to nginx.conf
envsubst '$SERVER_NAME $NEXT_JS_HOST $NEXT_JS_PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/nginx.conf

# Start Nginx
exec nginx -g 'daemon off;'
