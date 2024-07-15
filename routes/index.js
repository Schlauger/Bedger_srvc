const express = require('express');
const cors = require('cors');
const router = express.Router();
// Boltclock controller functions
const bc_ctrl = require('../boltclock_controllers/boldclocks');


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