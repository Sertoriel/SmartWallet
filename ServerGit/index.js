const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password:'123123',
    database:"bditens",
})

app.post("/item", (req, res) => {// método Create.
    const {item} = req.body;
    let SQL = "INSERT INTO listaitens (itens) VALUES (?)";
    db.query(SQL, item, (err, result) => {
        console.log(err);
    })
});

app.get("/itens", (req, res) =>{
    // Método Read.
    let SQL = "SELECT * FROM listaitens";

    db.query(SQL, (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get("/", (req, res) => {
    let SQL = "INSERT INTO listaitens (itens) VALUES ('teste')";

    db.query(SQL, (err, result) => {
    if (err) {
        console.log(err);
        return res
        .status(500)
        .json({ error: "Erro ao inserir dados na tabela." });
    }

    return res.status(200).json({ message: "Dados inseridos com sucesso." });
    });
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
})