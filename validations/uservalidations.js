const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email : Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    })
    
    const {erorr} = schema.validate(data);
    return erorr
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email : Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    })

    const {erorr} = schema.validate(data);
    return erorr
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;