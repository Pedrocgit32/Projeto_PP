const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = [
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.body.cpf,
        request.body.cep
    ];

    const query = "INSERT INTO users_rvmap (nome, email, senha, cpf, cep) VALUES (?, ?, ?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if (err) {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    sql: err
                });
        } else {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        }
    });
}

async function Getlogin(request, response) {    
    const email = Array(request.body.email);

    const query = "SELECT nome, email, senha, cpf, cep FROM users_rvmap WHERE email = ?";

    connection.query(query, email, (err, results) => {    
        console.log("erro", err)
        if (results.length > 0) {
            const senha = request.body.senha;
            const senhaquery = results[0].senha;
            
            if (senha === senhaquery){
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Senha correta",
                        data: results
                    })
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Senha incorreta"
                    })
            }       
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso",
                    data: err
                })
        }
    });
}

module.exports = {
    storeTask,
    Getlogin
};
