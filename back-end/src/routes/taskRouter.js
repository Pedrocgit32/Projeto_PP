const { Router } = require('express');
const router = Router();

const { storeTask, Getlogin } = require('../controller/taskController'); //criado uma const tanto para o cadastro quanto para o login

router.post('/store/task', storeTask); //Rota pro cadastro
router.get('/get/login', Getlogin); //Rota pro login

module.exports = router;