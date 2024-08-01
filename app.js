require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());
// Body parsing middleware
app.use(express.json());

// Set Mongo
mongoose.set('strictQuery', false);
const connDB = async () =>
    {
        try
        {
            const mong_conn = await mongoose.connect(process.env.MONGO_URL);
            console.log(`MongoDB connected: ${mong_conn.connection.host}`)
        } catch (error)
        {
            console.log('Malakia: ',error);
            process.exit(1);
        }
}

connDB().then(() =>
    {
        app.listen(port, () =>
        {
            console.log(`DB Listening on port ${port}`)
        })
});
    

// app.listen(port, () =>
//     {
//         console.log(`Bedger app is on http://localhost:${port}`);
//     })


// Import routes
const Router_Index = require('./routes/index');
// Default route
app.use('/', Router_Index);



