const express = require('express');

const {
  allBooks,
  bookById,
  addBook,
  updateBook,
  deleteBook,
} = require('../controllers/book-controller');

const router = express.Router();

router.get('/', allBooks);
router.get('/:id', bookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
