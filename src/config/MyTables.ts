import { Connection, ResultSetHeader } from 'mysql2';

class MyTables {
    // private conn: Connection;
    // constructor(conn: Connection) {
    //     this.conn = conn;
    // }
    // createUser() {
    //     const sql =
    //         'CREATE TABLE IF NOT EXISTS users (' +
    //         '    id INT NOT NULL AUTO_INCREMENT,' +
    //         '    firstName VARCHAR(40) NOT NULL,' +
    //         '    lastName VARCHAR(50) NOT NULL,' +
    //         '    email VARCHAR(40) NOT NULL,' +
    //         '    password VARCHAR(40) NOT NULL,' +
    //         '    status VARCHAR(20) NOT NULL,' +
    //         '    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,' +
    //         '    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,' +
    //         '    PRIMARY KEY(id)' +
    //         ')';
    //     this.conn.query(sql, (_err, results: ResultSetHeader) => {
    //         if (_err) return console.log('Erro ao criar tabela `users`', _err);
    //         if (results.warningStatus === 0) console.log('Tabela `users` criada com sucesso');
    //     });
    // }
}

export default MyTables;
