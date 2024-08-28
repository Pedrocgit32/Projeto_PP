const { Router } = require('express');
const router = Router();

const { StoreCadastro, Getlogin } = require('../controller/RegisterController'); //criado uma const tanto para o cadastro quanto para o login

router.post('/store/cadastro', StoreCadastro); //Rota pro cadastro
router.post('/login', Getlogin); //Rota pro login

module.exports = router;