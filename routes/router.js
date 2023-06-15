const express= require('express')
const userController = require('../controller/addController')
const router = new express.Router();


/* api */
router.get('/allusers',userController.getallusers);
router.get('/allusers/:_id', userController.viewItem);
router.delete('/users/:_id', userController.deleteUser);



/* export router */
module.exports = router