const express = require('express');
const {retrieveBooks, registerNewBook} = require('../controllers/book');
const {validateAuth} = require("../middleware/auth")

const router = express.Router();

router.post('/books',validateAuth,registerNewBook)
router.get('/books',validateAuth,retrieveBooks);

module.exports = router;