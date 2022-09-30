const router = require('express').Router();
//const modelsUser = require('../models/user');

const {
    getUser,
    getUserDni,
    postUser,
    putUser,
    deleteUser,

} = require('../controllers/user.controllers');

router.get('/user', getUser);

router.get('/user/:dni', getUserDni);

router.post('/user', postUser);

router.put('/user', putUser);

router.delete('/user', deleteUser);

module.exports = router;