const users = require('../models/addSchema')



exports.getallusers = async (req, res) => {
  /* logic */
  try {
    const allUsers = await users.find()
    
    res.status(200).json(allUsers)
  }
  catch (error) {
    res.status(401).json(error)
  }
}
exports.viewItem = async (req, res) => {
  const _id = req.params._id;
  try {
    const item = await users.findOne({ _id });
    console.log(item);
    if (item) {
      
      res.status(200).json(item);
    } else {
      res.status(404).json('Not Found !!!');
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.deleteUser = async (req, res) => {
  const _id = req.params._id;
  try {
    const deletedUser = await users.findByIdAndDelete(_id);
    if (deletedUser) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json('User not found');
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
