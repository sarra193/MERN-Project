const { check, validationResult } = require('express-validator');

exports.registerRules = () => [
      check('name', 'the name is required').notEmpty(),
      check('email', 'email is required').notEmpty(),
      check('email', 'this email is not valid').isEmail(),
      check('phoneNumber', 'this not a valid phone ').isLength({ min: 8, max: 8 }),
      check('passWord', 'password required').notEmpty()
];

exports.validator = (req, res, next) => {

      const errors = validationResult(req);

      errors.isEmpty() ? next() : res.status(402).json({errors:errors.array()});
}
