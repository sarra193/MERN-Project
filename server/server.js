

const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const express = require("express");
const connectDB = require("./config/config");


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



const user = require('./router/User');
const events =require('./router/Events')
const gallery =require('./router/Gallery')


//parse data

app.use(express.json())

//
app.use('/user', user);
app.use('/events', events);
app.use('/gallery', gallery);

//2.connect database

connectDB();

// 1.create server at the port 9000
const port = process.env.PORT|| 9000;

app.listen(port, (err) => {
      err?console.log("err",err):console.log(`connected at http://localhost:${port}`)
})

mongoose.set('useFindAndModify', false);










