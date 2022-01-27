const express = require('express');
const {validateAuth} = require('../middleware/auth')
const {createEditorial, deleteEditorial} = require('../controllers/editorial');

const router = express.Router();

router.post('/editorial',validateAuth,createEditorial);
router.delete('/editorial/:name',validateAuth,deleteEditorial);

module.exports = router;