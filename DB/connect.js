const mongoose = require('mongoose');

const connectDb = (URL) => {
  console.log('connected');
  return mongoose.connect(URL);
}

module.exports = connectDb;