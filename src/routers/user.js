const express = require('express');
const {authenticateUser, 
       createUserAccount, 
       logout,
       getAccountInformation, 
       deleteAccount} = require('../controllers/user');
const {validateAuth} = require('../middleware/auth');

const router = express.Router();

router.post('/user/createAccount',createUserAccount);
router.post('/user/login',authenticateUser);
router.post('/user/logout',validateAuth,logout);
router.get('/user',validateAuth,getAccountInformation);
router.delete('/user',validateAuth,deleteAccount);


module.exports = router;