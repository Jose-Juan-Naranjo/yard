const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  jobandphase: {
    type: String
  },
  shipto: {
    type: String
  },
  creditaccountnumber: {
    type: String
  },
  address: {
    type: String
  },
  totalcostinvoice: {
    type: String
  },
  citystatezip: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now().toString
  },
  item: [
    {
      ordered: {
        type: String
      },
      shipped: {
        type: String
      },
      descriptionInput: {
        type: String
      },
      price: {
        type: String
      },
      unit: {
        type: String
      },
      amount: {
        type: String
      }
    }
  ]
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
