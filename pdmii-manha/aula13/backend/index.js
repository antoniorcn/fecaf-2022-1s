const express = require('express');
const pg = require('pg');
const PORT = 443;
const pool = new pg.Pool({
  connectionString: "postgres://srvsnulayjprtc:0da988e0eddfaf3d652d11d2f899290339924d6c58939fcbbb0b250030220e34@ec2-54-172-175-251.compute-1.amazonaws.com:5432/dglvdobg6e1i5",
  ssl: {  // Secure Socket Layer
    rejectUnauthorized: false
  }
});

const app = express();
app.set('port', PORT);

app.route("/reset").post((req, res) => {
  let sql = "DROP TABLE IF EXISTS contatos;\n";
  sql += "CREATE TABLE contatos(\n";
  sql += "    nome varchar(100),\n";
  sql += "    telefone varchar(30)\n";
  sql += ");";

  console.log("Executando comando ==> ", sql);
  pool.query(sql, (erro, info) => {
    const dados = {
              status: "erro", 
              info: {}
    };
    if(erro) {
      console.log("Erro: ", erro);
      console.log("Info: ", info);
      dados.info = info;
      res.status(503).send(dados);
    } else {
      dados.status = "ok";
      dados.info = {mensagem: "tabela resetada com sucesso"};
      res.status(200).send(dados);
    }
  });
});


app.route("/inserir").post((req, res) => {
  const obj = req.body;
  let sql = "INSERT INTO contatos\n";
  sql += "(nome, telefone)\n";
  sql += " VALUES ('" + obj.nome + "',\n";
  sql += "    '" + obj.telefone + "')\n";
  sql += ");";

  console.log("Executando comando ==> ", sql);
  pool.query(sql, (erro, info) => {
    const dados = {
              status: "erro", 
              info: {}
    };
    if(erro) {
      console.log("Erro: ", erro);
      console.log("Info: ", info);
      dados.info = info;
      res.status(503).send(dados);
    } else {
      dados.status = "ok";
      dados.info = {mensagem: "registro inserido com sucesso"};
      res.status(200).send(dados);
    }
  });
});

app.listen(PORT, ()=>{
  console.log("Servidor iniciado");
});
