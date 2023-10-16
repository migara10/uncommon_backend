const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

// Use addNewItem as a callback, don't execute it here
router.post('/', (req, res) => {
  itemController.addNewItem(req.body); // You can pass the item here, or handle it differently
});

module.exports = router;
