const {
  addUser,
  getAllUser,
  getUserById,
  deleteUserById,
  updateUserById,
} = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();

router.post('/', addUser);
router.get('/', getAllUser);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;
