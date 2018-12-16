module.exports = {
  BACKEND_TYPE: process.env.BACKEND_TYPE || 'rest',
  
  // for 'rest'
  API_URL: process.env.API_URL || 'http://localhost:8080/api/store',
  
  // for 'mysql'
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT || 3306,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  
  INTERVAL: process.env.INTERVAL || 5,
  PLACE: process.env.PLACE || 'raspberry'
};
