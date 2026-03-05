var express = require('express');
var router = express.Router();

const { dataUser } = require('../utils/data2');

/* GET users listing */
router.get('/', function (req, res) {
  res.json(dataUser);
});

/* POST /users */
router.post('/', function (req, res) {

  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName,
    avatarUrl: req.body.avatarUrl,
    status: true,
    loginCount: 0,
    role: req.body.role,
    creationAt: new Date(),
    updatedAt: new Date()
  };

  dataUser.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

module.exports = router;