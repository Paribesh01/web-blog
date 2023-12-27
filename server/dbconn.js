const mongoose = require("mongoose");
require('dotenv').config();

const dbconn = ()=>{

    const URL = process.env.URL;
    mongoose.connect(URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
  }
  ).then(()=>{
    console.log("Connected to the database");
}).catch((e)=>{
    console.log("Error"+e);
});

}



module.exports = dbconn;