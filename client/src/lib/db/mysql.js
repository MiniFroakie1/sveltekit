import mysql from 'mysql2/promise';

export const mysqlconn = await mysql.createConnection({
    host: "localhost",
    database: "homepage",
    user: "root",
    password: "zczAZpkmrXTpQ7gqZZ8r"
})
