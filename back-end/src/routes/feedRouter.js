const router = require('express').Router();
const upload = require('../config/multer');

const { storeFeed } = require('../controller/feedController')

router.post('/store/feed', upload.single('file'), storeFeed);
router.get('/posts');

module.exports = router;
