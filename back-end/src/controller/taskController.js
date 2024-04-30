const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.body.cpf,
        request.body.cep
    );

    const query = "INSERT INTO users_rvmap (nome, email, senha, cpf, cep) VALUES (?, ?, ?, ?, ?)"

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    sql: err
                })
        }
    })
}

module.exports = {
    storeTask
}