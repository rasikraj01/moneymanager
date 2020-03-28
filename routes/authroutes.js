const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require('../models/user');

const {registerValidation , loginValidation }  = require('../validations/uservalidations');

// register route
router.post('/register', async (req, res) => {
    //validations
    let error = registerValidation(req.body)
    if (error) res.status(400).send(error.details[0].message)

    // check if already exists in the db
    let emailExists = await User.findOne({email : req.body.email})
    if (emailExists) res.status(400).send("Email already Exists")

    // hashing 
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create user
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    })

    // save user
    try{
        const savedUser = await user.save()
        res.send({
            name : savedUser.name,
            email: savedUser.email,
            role : savedUser.role
        }).status(200)

    }catch (err) {
        res.send(err).status(400)
    }
})

// lgin route
router.post('/login', async (req, res) => {

    //validation 
    let error = loginValidation(req.body)
    if (error) res.status(400).send(error.details[0].message);

    //check if email doesn't exist
    const user = await User.findOne({email : req.body.email})
    if (!user) res.status(400).send("User doesn't Exists");


    //check if passowrd is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) res.status(400).send("invalid password");

    // create and add token to headers
    const token = jwt.sign({_id: user._id, name: user.name}, process.env.AUTH_TOKEN_SECERT, {expiresIn : '5h'});
    res.header('auth-token', token).send(token);

})



router.get('/', () => {
    res.render('data')
})

module.exports = router;