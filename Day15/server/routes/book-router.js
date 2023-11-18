const express = require('express');
//create controller
const bookController = require('../controllers/book-controller');
//create router
const router = express.Router();

router.get('/', bookController.getAllBook);//all
router.get('/:id', bookController.getBookById);//getID
router.post('/', bookController.saveBook);//save
router.put('/:id', bookController.updateBook);//update
router.delete('/:id', bookController.deleteById);//delete

module.exports = router;