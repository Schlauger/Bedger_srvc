const express = require('express');
const cors = require('cors');
const router = express.Router();
// Boltclock controller functions
const bc_ctrl = require('../boltclock_controllers/boldclocks');

// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
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

router.get('/', bc_ctrl.simple);

router.get('/quote', bc_ctrl.quote);

router.post('/bedging', bc_ctrl.bedgingit);

connDB().then(() =>
{
    app.listen(PORT,)
    router.app.listen(PORT, () =>
    {
        console.log(`Listening on port ${PORT}`);
    })
});

module.exports = router;