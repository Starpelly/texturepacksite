const { Schema, model } = require('mongoose');

const requestsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    creator: {
      type: String,
      required: [true, 'creator field is required'],
    },
    videoURL: {
      type: String,
      required: [true, 'videoURL field is required'],
    },
    downloadURL: {
      type: String,
      required: [true, 'downloadURL field is required'],
    }
  },
  { timestamps: true },
);

module.exports = model('requests', requestsSchema);
