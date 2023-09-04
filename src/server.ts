import custonExpress from "./config/custonExpress";
import conn from "./config/connection";
import MyTables from "./config/MyTables";

conn.connect((error) => {
  if (error)
    return console.log(`Não foi possível realizar a conexão com o banco de dados
    ${error}`);

  new MyTables(conn).createUser();

  const app = custonExpress();

  app.listen(3000, () => console.log("Server iniciado na porta 3000."));
});
