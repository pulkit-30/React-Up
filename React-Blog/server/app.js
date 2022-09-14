require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const body_parser = require('body-parser');
const DB_Connection = require('./utils/connection');
const auth = require('./router/auth');
const blog = require('./router/blog');
const category = require('./router/category');
// ** App utilities
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cors());

//** connection Database
DB_Connection()
  .then(() => {
    console.log('Database connected Successfully!');
  })
  .catch((err) => console.log('Cannot Connect your Database !!', err));

//**  App Routes
app.use('/api/auth', auth);
app.use('/api/blog', blog);
app.use('/api/category', category);

// ** App Listening
const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('Running at PORT', port);
});
