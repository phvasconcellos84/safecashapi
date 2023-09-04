import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'PHVenois042819@',
  database: 'safecash'
};

const conn = mysql.createConnection(access);

export default conn;
