FROM grafana/grafana:5.4.5

COPY grafana-mysql.yml /datasource.yml
COPY dashboard.json /dashboards/dashboard.json
COPY dashboards.yml /etc/grafana/provisioning/dashboards/dashboards.yml

# Install 'envsubst' tool
USER root
RUN apt-get update && apt-get install gettext-base
RUN chown -R grafana:grafana /etc/grafana/provisioning


ENV MYSQL_HOST some_mysql_host
ENV MYSQL_DATABASE some_mysql_db
ENV MYSQL_USERNAME some_mysql_username
ENV MYSQL_PASSWORD some_mysql_password

USER grafana
ENTRYPOINT envsubst < /datasource.yml > /etc/grafana/provisioning/datasources/datasource.yml && /run.sh

