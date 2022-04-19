const express = require('express');
const { send } = require('express/lib/response');
const pg = require('pg'); // incluida
const app = express();
const PORT = 8080;

app.set('port', PORT);

// incluir rotina para criar acesso ao banco
const pool = new pg.Pool(
    {
        connectionString: "postgres://hcvlttgelrpmga:d73d49fc6cd6bfc8d9478a7e2bcce8a4707098cf7fb4fd46e1231012dfc6ba6d@ec2-23-20-224-166.compute-1.amazonaws.com:5432/df5vu2uikfsqcj",
        ssl: { 
            rejectUnauthorized: false
        }
    }
);
// fim da rotina para acessar o banco

app.route('/').get((req, res)=>{ 
    res.send("<h1>Ola ... com HTML</h1>");
});

app.route('/database').get((req, res)=> { 
    let sqlQuery = "DROP TABLE IF EXISTS contato;";
    sqlQuery    += "CREATE TABLE contato (";
    sqlQuery    += "    nome char(100), ";
    sqlQuery    += "    telefone char(25) ";
    sqlQuery    += ");";
    pool.query(sqlQuery, (err, result)=> { 
        if (err) { 
            res.send("Deu ruim para criar a tabela " + err);
        } else { 
            res.send("Tabela criada com sucesso");
        }
    });
});

app.route('/inserir').get((req, res) => { 
    let sqlQuery = "INSERT INTO contato (nome, telefone) ";
    sqlQuery += "VALUES ('João Silva', '(11) 1111-1111');";

    pool.query(sqlQuery, (err, result)=> { 
        if (err) { 
            res.send("Deu erro ao executar o insert");        
        } else { 
            res.send("Registro inserido com sucesso");
        }
    });
});


app.route('/consultar').get((req, res) => { 
    let sqlQuery = "SELECT * FROM contato;";
    pool.query(sqlQuery, (err, result) => { 
        if(err) { 
            res.send("Erro ao executar a query");
        } else {
            res.send("Resultado : " + 
                   JSON.stringify(result.rows));
        }
    });
});

app.listen(PORT, ()=>{ 
    console.log("Servidor iniciado");
});


