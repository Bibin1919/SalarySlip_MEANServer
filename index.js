const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const router = require('./routes/router');
const users = require('./models/addSchema');
const port = 3000 || process.env.PORT;
require('dotenv').config();
require('./db/connection');


app.use(express.json());
app.use(cors());
app.use(router);



mongoose.connect('mongodb+srv://bibinbinoy1919:bibin@cluster0.7o4brlu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
// Create a schema for the user
const userSchema = new mongoose.Schema({
  empname: String,
  dept: String,
  desg: String,
  doj: String,
  bp: String,
  adv: String,
  pf: String,
  lwf: String,
  te: String,
  td: String,
  np: String
});
// Define a User model based on the schema
const User = mongoose.model('User', userSchema);

// Handle POST request for registration form submission
app.post('/add', async (req, res) => {
  try {
    const { empname, dept, desg, doj, bp, adv, pf, lwf, te, td, np } = req.body;

    // Create a new user document
    const newUser = new User({
      empname,
      dept,
      desg,
      doj,
      bp,
      adv,
      pf,
      lwf,
      te,
      td,
      np
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({ message: 'Slip added successfully' });
  } catch (error) {
    console.error('Error adding slip:', error);
    res.status(500).json({ error: 'Error adding slip' });
  }
});

app.put('/user/:_id', async (req, res) => {
  const { _id } = req.params;
  const { empname, dept, desg, doj, bp, adv, pf, lwf, te, td, np } = req.body;

  try {
    // Find the user in the database
    const user = await users.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user details
    user.empname = empname;
    user.dept = dept;
    user.desg = desg;
    user.doj = doj;
    user.bp = bp;
    user.adv = adv;
    user.pf = pf;
    user.lwf = lwf;
    user.te = te;
    user.td = td;
    user.np = np;


    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3000');
});
