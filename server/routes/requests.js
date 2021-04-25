const express = require('express');
const rateLimit = require("express-rate-limit");

const app = express();

app.set('trust proxy', 1);

const {
  createData,
  readData,
  updateData,
  deleteData,
} = require('../controllers/requests_controller');

const requestPostLimiter = rateLimit({
  windowMs: 8 * 60 * 1000, // 5 minutes
  max: 3, // start blocking after 2 requests
  message:
    "Too many requests created from this IP, please try again after 10 minutes"
});

const router = express.Router();

router
  .post('/', requestPostLimiter, createData)
  .get('/', readData)

module.exports = router;
