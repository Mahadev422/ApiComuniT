const mongoose = require('mongoose');

const countryShema = new mongoose.Schema({
  name: String,
  dial_code: String,
  code: String
});


module.exports = mongoose.model('Country', countryShema);