const connection = require('../config/db');

async function getMarcador(request, response) {
    const query = "SELECT * FROM marcadores;";

    connection.query(query, (err, results) => {
        console.log(err, results)
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: 'Dados selecionados com sucesso',
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: 'Sem sucesso',
                    data: err
                });
        }
    })
}

module.exports ={
    getMarcador
}