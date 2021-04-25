const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    id: {
      type: Number,
      required: [true, 'id field is required'],
    },
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    creator: {
      type: String,
      required: [true, 'creator field is required'],
    },
    creatorURL: {
      type: String,
      required: [true, 'creatorURL field is required'],
    },
    videoURL: {
      type: String,
      required: [true, 'videoURL field is required'],
    },
    mediafireDownload: {
      type: String,
      required: [true, 'mediafireDownload field is required'],
    },
    mainMenuPreviewURL: {
      type: String,
      required: [true, 'mainMenuPreviewURL field is required'],
    },
    secondMenuPreviewURL: {
      type: String,
      required: [true, 'secondMenuPreviewURL field is required'],
    }
  },
  { timestamps: true },
);

module.exports = model('users', userSchema);
