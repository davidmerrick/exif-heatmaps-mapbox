FROM nginx:1.10.2

COPY bin/start.sh /bin/start.sh
RUN chmod +x /bin/start.sh

CMD ["/bin/start.sh"]