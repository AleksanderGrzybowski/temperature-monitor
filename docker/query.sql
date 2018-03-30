# noinspection SqlNoDataSourceInspectionForFile

# noinspection SqlResolveForFile

SELECT
  UNIX_TIMESTAMP(date_time) as time_sec,
  temperature as 'value',
  place as metric
FROM temperature_info
WHERE $__timeFilter(date_time)
ORDER BY date_time ASC