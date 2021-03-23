const express = require("express");
const { register, login } = require("../controllers/user.controller");
const isAuth = require("../middleware/passport-setup");
const {validator, loginRules} = require("../middleware/validator");
const { registerRules } = require("../middleware/validator");
const router = express.Router();

router.post('/register',registerRules(),validator, register)
router.post('/login',loginRules(),validator, login);
router.get('/profile', isAuth(),(req,res)=>{res.json(req.user)});


module.exports = router;