const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');

router.post(('/'), sauceCtrl.createSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.put('/:id', sauceCtrl.modyfySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.get('/', sauceCtrl.getAllSauces);

module.exports = router;