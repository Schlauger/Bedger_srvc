require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const port = process.env.PORT || 3003;

// Set Mongo
mongoose.set('strictQuery', false);

const connDB = async () =>
{
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error)
    {
        console.log(error);
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

app.listen(port, () =>
{
    console.log(`Bedger app is on http://localhost:${port}`);
})

// Use CORS middleware
app.use(cors());
// Body parsing middleware
app.use(express.json());


// const router = express.Router();
const Router_Index = require('./routes/index');
// Default route
app.use('/', Router_Index);



