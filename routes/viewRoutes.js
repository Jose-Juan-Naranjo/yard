const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.routes('/login').get(viewsController.getLoginForm);

module.exports = router;
