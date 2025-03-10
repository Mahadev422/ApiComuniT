const express = require('express');
const { getAllProducts } = require('../controllers/dataController');
const router = express.Router();

router.route('/country').get(getAllProducts);


module.exports = router;