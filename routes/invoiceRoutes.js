const express = require('express');
const invoiceController = require('./../controllers/invoiceController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/saved-invoices')
  .get(authController.protect, invoiceController.getAllInvoices);

router
  .route('/json')
  .get(authController.protect, invoiceController.invoicesJson);

router
  .route('/')
  .get(authController.protect, invoiceController.invoiceForm)
  .post(invoiceController.createInvoice);

router
  .route('/:id')
  .get(authController.protect, invoiceController.getInvoice)
  .delete(invoiceController.deleteInvoice);

router.route('/update/:id').patch(invoiceController.updateInvoice);

module.exports = router;
