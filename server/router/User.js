const express = require("express");
const { register, login,updateProfile } = require("../controllers/user.controller");
const isAuth = require("../middleware/passport-setup");
const {validator, loginRules} = require("../middleware/validator");
const { registerRules } = require("../middleware/validator");
const router = express.Router();
const upload = require("../utils/multer");

router.post('/register',registerRules(),validator, register)
router.post('/login',loginRules(),validator, login);
router.get('/profile', isAuth(),(req,res)=>{res.json(req.user)});
router.put('/profile/:_id', isAuth(),upload.single("image"),updateProfile);

module.exports = router;