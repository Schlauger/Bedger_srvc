const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


// Use CORS middleware
app.use(cors());

// Body parsing middleware
app.use(express.json());

// const router = express.Router();
const Router_Index = require('./routes/index');


// Default route
app.use('/', Router_Index);


app.listen(port, () =>
{
    console.log(`Bedger app is on http://localhost:${port}`);
})
