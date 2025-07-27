const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage });

router.post('/', upload.single('image'), itemController.createItem);
router.get('/', itemController.getAllItems);
router.post('/:id', upload.single('image'), itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
