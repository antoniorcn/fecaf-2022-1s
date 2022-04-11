const express = require('express');
const port = 80;
const app = express();

app.set('port', port);


app.route('/').get((requisicao, resposta) => {
  console.log("Recebida requisição na /");
  // console.log(requisicao);
  resposta.send("Ola...");
});

app.route('/clima').get((req, res) => {
  console.log("Rota clima foi acessada");
  res.send("O clima em Taboão da Serra está ensolarado");
})

app.route('/fecaf').get((req, res) => {
  res.send('<HTML><a target="_blank" href="http://www.fecaf.com.br">Acesse a Fecaf</a></HMTL>');
})

app.route('/apiclima').get((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send('[{"cidade": "Taboão da Serra", "temp": 22, "tempo": "ensolarado"}]');
})

app.listen(port, () => {
  console.log("Servidor foi iniciado");
})


