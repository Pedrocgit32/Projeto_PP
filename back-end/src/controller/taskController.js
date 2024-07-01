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
    const email = request.query.email;
    const senha = request.query.senha;
    const query = "SELECT email, senha FROM users_rvmap WHERE email = ?";

    connection.query(query, [email], (err, results) => {    
        if (err) {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso!",
                    data: err
                });
        } else if (results.length > 0) {
            const senhaQuery = results[0].senha;
  
            if (senha === senhaQuery) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Sucesso!",
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Senha incorreta!"
                    });
            }
        } else {
            response
                .status(404)
                .json({
                    success: false,
                    message: "Usuário não encontrado!"
                });
        }
    });
}

module.exports = {
    storeTask,
    Getlogin
};
