const mongoose = require('mongoose')

// Define a schema for the data
const userSchema = new mongoose.Schema({
   
    empname: { type: String, required: true },
  dept: { type: String, required: true },
  desg: { type: String, required: true },
  doj: { type: String, required: true },
  bp: { type: Number, required: true },
  adv: { type: Number, required: true },
  pf: { type: Number, required: true },
  lwf: { type: Number, required: true },
  te: { type: Number, required: true },
  td: { type: Number, required: true },
  np: { type: Number, required: true }
});

// Define a model for the data
const users = new mongoose.model("users", userSchema);

/* export model */
module.exports = users

