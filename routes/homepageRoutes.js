const express = require('express');
const authController = require('./../controllers/authController');
const invoiceController = require('../controllers/invoiceController');

const router = express.Router();

router.route('/').get(authController.protect, invoiceController.homepage);

module.exports = router;
