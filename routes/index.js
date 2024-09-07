const express = require('express');
const cors = require('cors');
const router = express.Router();
// Boltclock controller functions
const bc_ctrl = require('../boltclock_controllers/boldclocks');


router.get('/', bc_ctrl.simple);
router.get('/quote', bc_ctrl.quote);
router.post('/bedging', bc_ctrl.bedgingit);
router.get('/bedger-init', bc_ctrl.bedg_init);

router.get('/bedger-find', bc_ctrl.bedg_find);
// Create
router.post('/bedgingADD', bc_ctrl.add_ideopoiima);
// Edit
router.put('/bedgingADD', bc_ctrl.edit_ideopoiima);
// Delete
router.delete('/bedgingADD', bc_ctrl.delete_ideopoiima);


module.exports = router;