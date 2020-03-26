const Joi = require('@hapi/joi');

const  transactionValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        date : Joi.date().required(),
        category: Joi.string().required().valid('fun','food', 'education', 'clothing', 'investment', 'interest', 'vacation', 'salary', 'rent', 'subscription'),
        type: Joi.string().required().valid('expense', 'income'),
        amount : Joi.number().required(),
        desc : Joi.string().required()
    })
    
    const {error} = schema.validate(data);
    return error
}


module.exports. transactionValidation =  transactionValidation;