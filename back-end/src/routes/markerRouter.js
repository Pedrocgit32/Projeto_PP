const { Router } = require('express');
const router = Router();


const { getMarcador } = require('../controller/markerController');

router.get('/marker', getMarcador);

module.exports = router;