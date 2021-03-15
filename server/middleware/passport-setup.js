const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require("dotenv").config({ path: './config/.env' });
const User = require('../models/User');
const secretOrKey = process.env.secretOrKey;
const passport = require('passport');
var opts = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey
};
passport.initialize();

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
      const { id } = jwt_payload;
      try {
            const authUser = await User.findById(id);
            authUser ? done(null, authUser) : done(null, false);
      } catch (error) {
            console.log("error", error);
            
      }

}))

const isAuth = () => passport.authenticate("jwt", { session: false });

module.exports = isAuth;