# Use the official Nginx image
FROM nginx

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom nginx.conf template
COPY nginx.conf.template /etc/nginx/

# Copy the entrypoint script
COPY entrypoint.sh /docker-entrypoint.d/

# Set execute permission on the entrypoint script
RUN chmod +x /docker-entrypoint.d/entrypoint.sh

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx using the entrypoint script
CMD ["/docker-entrypoint.d/entrypoint.sh"]