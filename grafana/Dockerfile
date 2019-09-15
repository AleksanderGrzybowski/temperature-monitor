FROM grafana/grafana:5.4.5

COPY grafana-mysql.yml /etc/grafana/provisioning/datasources/datasource.yml
COPY dashboard.json /dashboards/dashboard.json
COPY dashboards.yml /etc/grafana/provisioning/dashboards/dashboards.yml

# Install 'envsubst' tool
USER root
RUN apt-get update && apt-get install gettext-base
RUN chown -R grafana:grafana /etc/grafana/provisioning

USER grafana
ENTRYPOINT envsubst < /etc/grafana/provisioning/datasources/datasource.yml > /etc/grafana/provisioning/datasources/datasource.yml && /run.sh

