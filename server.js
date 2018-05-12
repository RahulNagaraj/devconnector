const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Mongoose connect
mongoose
  .connect(db)
  .then(() => console.log('Successfully connected to Mongo db'))
  .catch(err => console.error('Error in connection to db', err));

app.get('/', (req, res) => res.send('Hello world!'));

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
