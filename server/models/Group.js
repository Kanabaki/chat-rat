const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
});

const Group = model('Group', groupSchema);

module.exports = Group;
