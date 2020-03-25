const express = require('express');
const mongoose = require('mongoose');

const authRoute = require('./authroutes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;


mongoose.connect(
    process.env.DB_CONNECT,
    () => {
     console.log('Database connected');
    }
)

app.use(express.json());
app.use('/api/user', authRoute);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
})