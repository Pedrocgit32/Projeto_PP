const connection = require('../config/db');

async function storeFeed(request, response) {
    const params = Array(
        // request.file.filename,
        request.body.id_user,
        request.body.comment
    );

    const query = "INSERT INTO feedbacks( id_user, comment) VALUES(?,?);";

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
    storeFeed
}
