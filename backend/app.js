//password: NrDllR4xnU3PhMLh
//password:d5bKK58Ct7QeIrqA username:somayyehkm
//mongodb+srv://somayyehkm:<db_password>@cluster0.hcwwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const sauceRoutes =require('./routes/stuff');

const app = express();

mongoose.connect('mongodb+srv://somayyehkm:<db_d5bKK58Ct7QeIrqA>@cluster0.hcwwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
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

app.use('/api/sauce',sauceRoutes);

module.exports = app;



