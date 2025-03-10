const Country = require('../models/country');

const getAllProducts = async (req, res) => {
  const myData = await Country.find(req.query);
  res.status(200).json({myData});
}


module.exports = { getAllProducts };
