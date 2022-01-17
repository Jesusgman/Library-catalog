const express = require('express');
const {authenticateUser, createUserAccount} = require('../controllers/user');
const {validateAuth} = require('../middleware/auth')

const router = express.Router();

router.post('/createAccount',validateAuth,createUserAccount);
router.post('/login',authenticateUser);

module.exports = router;