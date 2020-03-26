const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;


mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => {
     console.log('Database connected');
    }
)

app.use(express.json());
app.use('/api/user', authRoutes);
app.use('/api/transaction', transactionRoutes);



app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
})