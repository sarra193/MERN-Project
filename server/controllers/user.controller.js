const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: './config/.env' });
const secretOrKey = process.env.secretOrKey;

exports.register = async (req, res) => {
      
      const { name, email, phoneNumber, passWord } = req.body;

      const searchEmail = await User.findOne({ email })
      if (searchEmail) return res.status(401).json({ msg: 'user already exist' })
      
      try {
            
            const newUser = new User({
                  name,
                  email,
                  phoneNumber,
                  passWord
                  
            });

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(passWord, salt);
            newUser.passWord = hash;
            
            await newUser.save();
            res.status(201).json({ msg: 'user added successfully' });
            
            console.log("201")
      } catch (err) {
      
            console.log("error", err)
            res.status(501).json({ msg: 'user add failed' })
      }
      
};


exports.login = async (req,res) => {
      const { email, passWord } = req.body;
      const user = await User.findOne({ email });

      if (!user)return res.status(400).json({msg:'wrong email'})

      const isMatch = await bcrypt.compare(passWord, user.passWord);

      if (!isMatch) return res.status(400).json({ msg: 'wrong passWord' });

      try {
            const payload = {
                  email:user.email,
                  name:user.name,
                  phoneNumber: user.phoneNumber,
                  id:user._id,
                  
            }
      
            const token = await jwt.sign(payload, secretOrKey);
            res.status(200).json({ token: `Bearer ${token}` }); 

            
      } catch (error) {
            console.log("Login error", error);
            res.status(500).json({msg:"login failed"})
            
      }
      
}