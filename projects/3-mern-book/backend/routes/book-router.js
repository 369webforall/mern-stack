const express = require('express');

const { allBooks, bookById } = require('../controllers/book-controller');

const router = express.Router();

router.get('/', allBooks);
router.get('/:id', bookById);

module.exports = router;
