// Import required module
var User = require('../models/user')
var Item = require('../models/items')
var mongoose = require('mongoose')

exports.getAllEmployee = function (req, res) {
  console.log('getall')
  User.find({}, function (error, response) {
    if (error) {
      return res.json(req, res, error)
    }
    // sending the reponse to the browser
    res.json(response)
  })
}

// Post users
exports.postUser = function (req, res) {
  console.log('post')
  var user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    created_at: new Date(),
    updated_at: new Date()
  })

  user.save(function (err, response) {
    if (err) {
      return res.json(err)
    }

    res.json({success: true, body: response})
  })
}

// check user
exports.usercheck = function (req, res) {
  console.log(req.body)
  var username = req.body.username
  User.findOne({
    username: username
  }, function (error, response) {
    if (error) {
      res.json(error)
      console.log('error')
    } else if (!response) {
      data = {
        itemData: response,
        status: false
      }
      res.json(data)
    } else {
      data = {
        itemData: response,
        status: true
      }
      res.json(data)
    }
    // sending the reponse to the browser
  })
}

exports.getItems = function (req, res) {
  Item
    .find({}, function (error, response) {
      if (error) {
        res.json(error)
      } else if (!response) {
        data = {
          itemData: response,
          status: true
        }
        res.json(data)
      } else {
        data = {
          itemData: response,
          status: true
        }
        res.json(data)
      }
      // sending the reponse to the browser
    })
}

// Post items
exports.postItem = function (req, res) {
  console.log('post')
  var item = new Item({
    price: req.body.price,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image})

  item.save(function (err, response) {
    if (err) {
      return res.json(err)
    }

    res.json({success: true, body: response})
  })
}
