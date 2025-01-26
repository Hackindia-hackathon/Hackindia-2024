const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
  productId: String,
  name: String,
  currentStage: String,
  history: [{ 
    stage: String,
    timestamp: Date,
    location: String
  }]
});

const Product = mongoose.model('Product', productSchema);

app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/products/:id/update-stage', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.id });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    product.currentStage = req.body.stage;
    product.history.push({
      stage: req.body.stage,
      timestamp: new Date(),
      location: req.body.location
    });
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));