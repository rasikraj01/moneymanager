const router = require('express').Router();

const User = require('../models/user');

const {registerValidation , loginValidation }  = require('../validations/uservalidations');

// register route
router.post('/register', async () => {
    
})

router.get('/', () => {
    res.render('data')
})

module.exports = router;