const router = require('express').Router();

const User = require('../models/user');

const {registerValidation , loginValidation }  = require('../validations/uservalidations');

// register route
router.post('/register', async (req, res) => {
    //validations
    let error = registerValidation(req.body)
    if (error) res.status(400).send(error.details[0].message)

    // check if already exists
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



router.get('/', () => {
    res.render('data')
})

module.exports = router;