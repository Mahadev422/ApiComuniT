require('dotenv').config();
const connectDb = require('./DB/connect');
const Country = require('./models/country');
const countryCodeJson = require('./countryCode.json');

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    await Country.create(countryCodeJson);
    console.log('success');
  } catch (err) {
    console.log(err);
  }
};

start();