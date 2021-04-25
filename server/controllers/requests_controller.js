'use strict';

const Request = require('../models/requests_schema');

const createData = (req, res) => {

    Request.create(req.body)
    .then((data) => {
      console.log('New Request Created!', data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const readData = (req, res) => {

  Request.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const updateData = (req, res) => {

  Request.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
      new: true,
    })
      .then((data) => {
        console.log('Request updated!');
        res.status(201).json(data);
      })
      .catch((err) => {
        if (err.name === 'ValidationError') {
          console.error('Error Validating!', err);
          res.status(422).json(err);
        } else {
          console.error(err);
          res.status(500).json(err);
        }
      });
};

const deleteData = (req, res) => {

  Request.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error('Request not available');
      }
      return data.remove();
    })
    .then((data) => {
      console.log('Request removed!');
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  createData,
  readData,
  updateData,
  deleteData,
};
