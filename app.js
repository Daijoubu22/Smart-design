const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const productRouter = require('./routes/product.routes');
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();
const PORT = config.get('port');

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/product', productRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'));
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    })
  } catch (err) {

  }
}

start();