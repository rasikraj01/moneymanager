const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require('../models/user');

const Transaction = require('../models/transaction');



const {transactionValidation }  = require('../validations/transactionvalidations');
const authenticate  = require('../middleware/authentication');

// add transaction
router.post('/add', authenticate ,async (req, res) => {
    //validations
    let error = transactionValidation(req.body)
    if (error) res.status(400).send(error.details[0].message)

    // create transactions
    const newTransaction = new Transaction({
        user: req.user._id,
        title : req.body.title,
        date : req.body.date,
        category : req.body.category,
        type : req.body.type,
        amount: req.body.amount,
        desc : req.body.desc
    })
    
    // save transaction
    try{
        const savedTransaction = await newTransaction.save()
        res.send({
            user : savedTransaction.user,
            title: savedTransaction.title,
            amount : savedTransaction.amount
        }).status(200)

    }catch (err) {
        res.send(err).status(400)
    }
})


// get transactions
router.get('/', authenticate, async (req, res) => {
    if (req.user){
        const listTransaction = await Transaction.find({user : req.user._id})
        res.send(listTransaction).status(200)
    }else{
        res.send("Access Denied").status(401)
    }
})



module.exports = router;