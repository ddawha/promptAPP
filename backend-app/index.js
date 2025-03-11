require('dotenv').config();

// Verify that environment variables are loaded
console.log('Loaded environment variables:', process.env);

const mongoose = require('mongoose');

// ...existing code...

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error('Error: MONGO_URI is not defined in the environment variables.');
    process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// ...existing code...