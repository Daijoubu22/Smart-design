const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  id: {type: Number, required: true, unique: true},
  name: {type: String, required: true},
});

module.exports = model('Product', schema);