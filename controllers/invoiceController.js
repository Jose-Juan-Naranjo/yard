const Invoice = require('./../models/invoiceModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('./../models/userModel');

exports.invoicesJson = catchAsync(async (req, res, next) => {
  const invoices = await Invoice.find();

  res.status(200).json({
    status: 'success',
    Count: invoices.length,
    data: {
      invoices
    }
  });
});

exports.homepage = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).render('base', {
    users
  });
});

exports.invoiceForm = catchAsync(async (req, res, next) => {
  res.status(200).render('invoice');
});

exports.getAllInvoices = catchAsync(async (req, res, next) => {
  const invoices = await Invoice.find();
  const users = await User.find();

  res.status(200).render('saved-invoices', {
    users,
    invoices
  });
});

exports.getInvoice = catchAsync(async (req, res, next) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    return next(new AppError('No Invoice found with that ID', 404));
  }

  res.status(200).render('view-invoice', {
    invoice
  });
});

exports.createInvoice = catchAsync(async (req, res, next) => {
  await Invoice.create(req.body);
  res.status(201);
  return res.redirect('/api/v1/invoices/saved-invoices');
});

exports.updateInvoice = catchAsync(async (req, res, next) => {
  const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!invoice) {
    return next(new AppError('No Invoice found with that ID', 404));
  }
  res.status(200).json({
    status: 'Invoice updated',
    data: {
      Invoice
    }
  });
});

exports.deleteInvoice = catchAsync(async (req, res, next) => {
  const invoice = await Invoice.findByIdAndDelete(req.params.id);

  if (!invoice) {
    return next(new AppError('No Invoice found with that ID', 404));
  }
  const invoices = await Invoice.find();

  res.status(200).render('saved-invoices', {
    invoices
  });
  // res.write(
  //   '<head><style>h1{text-align:center;color:white;margin-top:50px;background-color:red;margin:0 auto;}</style></head>'
  // );
  // res.write(
  //   '<h1>Invoice DELETED!</h1><hr><br><a href="./invoices">Create Another Invoice</a><br><a href="/">Home</a><br><a href="invoices/saved-invoices">Invoice Archive</a>'
  // );
  // res.end();
});
