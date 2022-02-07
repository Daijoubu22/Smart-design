const {Router} = require('express');
const router = Router();
const Product = require('../models/Product');
   

router.post('/add', async (req, res) => {
  try {
    // const {name} = req.body;
    console.log(req.body);

    const product = new Product({name: '123', description: '123'});
    await product.save();
    res.status(201).json({message: 'Product has been added'});
  } catch (err) {
    res.status(500).json({message: 'Something went wrong...'});
  }
});

module.exports = router;