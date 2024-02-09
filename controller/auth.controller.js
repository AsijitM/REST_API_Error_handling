const AppError = require('../AppError');
const loginSchema = require('../validations/loginSchema');
const ErrorCode = require('./root');

// mimicking database call
const getUser = () => undefined;
const getSubsciption = () => undefined;

// This is one convention
async function basic_test(req, res, next) {
  try {
    const user = getUser();
    if (!user) {
      throw new Error('User not found!!');
    }
  } catch (error) {
    return next(error);
  }

  return res.status(200).json({ success: true });
}
// This one is suggested

// Check the routes file where this controller is called you will understand the trick
async function basic(req, res) {
  const user = getUser();
  if (!user) {
    throw new Error('User not found!!');
  }
  return res.status(200).json({ success: true });
}

// lets do some validation errors

async function basic2(req, res) {
  // do the validation schema check before anything else

  const { error, value } = loginSchema.validate({});
  //   if (error) throw error;
  const subscription = getSubsciption();
  if (!subscription) {
    throw new AppError(
      ErrorCode.INVALID_SUBSCRIPTION,
      'subscription not found',
      400
    );
  }
}

module.exports = {
  basic,
  basic2,
};
