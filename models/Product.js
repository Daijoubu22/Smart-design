const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  parameters: {
    price: {type: String, required: true},
    weight: {type: String, required: true},
    color: {type: String, required: true}
  }
});

module.exports = mongoose.model('Product', productSchema);