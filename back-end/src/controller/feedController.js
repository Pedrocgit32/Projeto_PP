const connection = require('../config/db');

async function getPosts(request, response) {
    const query = "SELECT * FROM feedbacks;";

    connection.query(query, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: 'Dados selecionados com sucesso',
                    data: results
                });
        } else {
            response
                .status(201)
                .json({
                    success: false,
                    message: 'Sem sucesso',
                    data: err
                });
        }
    })
}

async function storeFeed(request, response) {
    const params = Array(
        request.file.filename,
        request.body.id_user,
        request.body.comment
    );

    const query = "INSERT INTO feedbacks(file,id_user,comment) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso",
                    data: err
                });
        }
    });
}

module.exports = {
    storeFeed,
    getPosts
}
