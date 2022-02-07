const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = config.get('port') || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));
// app.use(express.json({extended: true}));
app.use('/api/product', require('./routes/product.routes'));

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (err) {
    console.log('Server error', err.message);
    process.exit(1);
  }
}

start();