const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('Successfully added to mongoDB Atlas');
})
  .catch((error) => {
    console.log('Unable to connect to MongoDB atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Header-Method', 'GET,POST,PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
//TODO add user router (done)
app.user('/api/auth', userRoutes);
app.use('/api/sauce', sauceRoutes);

module.exports = app;



