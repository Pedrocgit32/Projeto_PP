const connection = require("../config/db");

async function login(request, response) {    
  const email = request.body.email;
  const query = "SELECT nome, email, senha FROM users WHERE email = ?";

  connection.query(query, email, (err, results) => {    
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