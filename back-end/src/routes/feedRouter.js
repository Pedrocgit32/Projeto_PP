const router = require('express').Router();
const upload = require('../config/multer');

const { storeFeed, getPosts } = require('../controller/feedController')
/**
 * @swagger
 * /store/feed:
 *  post:
 *    summary: Guarda a foto e o comentário do usuario
 *    responses: 
 *      200:
 *        description: Cadastro de foto e comentario do usuario
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/store/feed', upload.single('file'), storeFeed);
/**
 * @swagger
 * /posts:
 *  get:
 *    summary: Recebimento do feedback do usuario
 *    responses: 
 *      200:
 *        description: Vai estar recuperando a foto e o comentario do usuario
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */

router.get('/posts', getPosts);

module.exports = router;
