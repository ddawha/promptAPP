require('dotenv').config();  // Load .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://daviddawha:HY0sq5t8ythw5XXp@promptapp.ymfyk.mongodb.net/promptAPP?retryWrites=true&w=majority&appName=promptAPP';

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON bodies

console.log(process.env.MONGO_URI); // Add this to check if the value is correctly loaded
console.log(process.env.PORT); // Add this to check if the value is correctly loaded

// Connect to MongoDB
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define routes (we'll set up an initial test route)
app.get('/', (req, res) => {
  res.send('Inventory Management API');
});

module.exports = app;

const productRoutes = require('./routes/product');

// Use the product route
app.use('/api/products', productRoutes);
