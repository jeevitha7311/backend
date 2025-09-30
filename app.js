const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname,'./config/config.env')});

const products = require('./routes/product');
const orders = require('./routes/order');
app.use(express.json());
app.use(cors({
    origin: [
        'https://shopping-app-1109.vercel.app',
        'http://localhost:3000'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use('/api/v1',products);
app.use('/api/v1',orders);
connectDatabase();

app.listen(process.env.PORT,() => {
    console.log(`Server is running on http://localhost:${process.env.PORT} in ${process.env.MODE_ENV} mode`);
    
})
