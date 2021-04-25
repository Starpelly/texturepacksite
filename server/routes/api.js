const express = require('express');

const {
  readData,
} = require('../controllers/user_controller');

const router = express.Router();

router
  .get('/', readData)

module.exports = router;
