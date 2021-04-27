const mongoose = require('mongoose')
require('dotenv').config();

const url = process.env.MONGODB
const connection = mongoose.connection 

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})

connection.once('open', () => {
    console.log('Connected Database Successfully');
  });