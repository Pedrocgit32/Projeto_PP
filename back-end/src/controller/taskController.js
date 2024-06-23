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

async function Getlogin(request, response) {    
    const email = request.body.email;
    const senha = request.body.senha;
    const query = "SELECT email, senha FROM users WHERE email = ?, ?";
  
    connection.query(query, email, senha, (err, results) => {    
      if(results) {
        const senha = request.body.senha;
        const senhaQuery = results[0].senha;
  
        if (senha === senhaQuery) {
          response
            .status(200)
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
              message: "Sem Sucesso!",
              data: err
            })
        }
      }
    })
    
  }

module.exports = {
    storeTask,
    Getlogin
};