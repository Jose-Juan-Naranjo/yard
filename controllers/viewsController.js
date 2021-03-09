const catchAsync = require('../utils/catchAsync');
const Users = require('../models/userModel');

// exports.getLoginForm = catchAsync(async (req, res, next) => {
//   res.status(200).render('login', {
//     title: 'Log In'const router = express.Router();

exports.base = catchAsync(async (req, res, next) => {
  const users = await Users.find();

  res.status(200).render('base', {
    users
  });
});
