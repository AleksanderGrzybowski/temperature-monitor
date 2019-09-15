module.exports = {
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
  MYSQL_PORT: process.env.MYSQL_PORT || 3306,
  MYSQL_USER: process.env.MYSQL_USER || 'root',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'root',
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'temperature',
  
  INTERVAL: process.env.INTERVAL || 5,
  PLACE: process.env.PLACE || 'raspberry'
};
