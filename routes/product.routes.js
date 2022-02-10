const Router = require('express');
const Product = require('../models/Product');
const router = new Router();

router.post('/add', async (req, res) => {
  try {
    const {name, description, parameters} = req.body;
    const product = new Product({name, description, parameters});
    await product.save();
    return res.json({message: 'Product has been added'});
  } catch (err) {
    console.log(err);
    res.send({message: "Server error"});
  }
});

router.get('/', async (req, res) => {
  try {
    const {input, property} = req.query;
    let products = [];
    if (input) {
      switch (property) {
        case 'name':
          products = await Product.find({'name': input});
          break;
        case 'description':
          products = await Product.find({'description': input});
          break;
        default:
          const str = `parameters.${property}`;
          products = await Product.find({[str]: input});
          break;
      }
    }
    else products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
    res.send({message: "Server error"});
  }
})

module.exports = router;