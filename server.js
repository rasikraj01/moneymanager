const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authroutes');
const transactionRoutes = require('./routes/transactionRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;


mongoose.connect(
    `mongodb+srv://${process.env.DB_CONNECT}:${process.env.DB_CONNECT}@moneymgr-sfi2d.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
    () => {
     console.log('Database connected');
    }
)

app.use(express.json());
app.use('/api/user', authRoutes);
app.use('/api/transaction', transactionRoutes);

app.get('/', (req, res) => {
    res.send({'test': 'ok'})
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
})