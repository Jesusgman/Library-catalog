const express = require('express');
const {retrieveBooks} = require('../controllers/book');

const router = express.Router();

router.get('/books/:id',retrieveBooks);

module.exports = router;