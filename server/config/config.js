const mongoose = require("mongoose");

/* const config = require(config);*/

require('dotenv').config({ path: './config/.env' });



const connectDB = async () => {
      try
      { 

            await mongoose.connect(process.env.mongoURI, {
            
            useNewUrlParser: true,
            useUnifiedTopology:true


      });
            console.log("database connected");
      } catch (err) {
            console.log("database connect fail", err);
      }
}




/* 
const connectDB = ()=>{
      mongoose
            .connect(config("MONGOURI"))
            .then(console.log("mongoose is connect"))
            .catch((err)=>console.log("err",err))
      
} */


      module.exports = connectDB;
