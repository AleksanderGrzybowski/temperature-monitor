module.exports = {
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
  MYSQL_PORT: process.env.MYSQL_PORT || 3306,
  MYSQL_USER: process.env.MYSQL_USER || 'root',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'root',
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'temperature',

  APPID: process.env.APPID || 'fake_app_id',
  CITIES: process.env.CITIES || 'Ustron,Skoczow,Wisla'
};
