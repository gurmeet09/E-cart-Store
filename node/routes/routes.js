// import the required modules
var express = require('express')
var router = express.Router()
var employeeController = require('../controllers/userController')


//api for posting the data of employee
router.route('/v1/User/upload')
    .post(employeeController.postUser)

//api for getting the all employees from the db
router.route('/v1/getAllEmployee')
    .get(employeeController.getAllEmployee)

//api for user verify
router.route('/v1/userverify')
    .post(employeeController.usercheck)

router.route('/v1/getItems')
    .get(employeeController.getItems)

router.route('/v1/postItems')
    .post(employeeController.postItem)

//export the router
module.exports = router
