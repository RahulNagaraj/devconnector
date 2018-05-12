const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Mongoose connect
mongoose
  .connect(db)
  .then(() => console.log('Successfully connected to db'))
  .catch(err => console.error('Error in connection to db', err));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
