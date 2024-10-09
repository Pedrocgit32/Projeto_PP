const { Router } = require('express');
const router = Router();

const { StoreCadastro, Getlogin } = require('../controller/RegisterController'); //criado uma const tanto para o cadastro quanto para o login
/**
 * @swagger
 * /store/cadastro:
 *  post:
 *    summary: Cadastramento dos dados do usuario
 *    responses: 
 *      200:
 *        description: lista de campos para o usuario preencher
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/store/cadastro', StoreCadastro); //Rota pro cadastro
/**
 * @swagger
 * /login:
 *  post:
 *    summary: Verificação dos dados do usuario
 *    responses: 
 *      200:
 *        description: Campo onde o usuario verificara seu email e sua senha
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/login', Getlogin); //Rota pro login

module.exports = router;