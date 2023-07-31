const Book = require('../models/Book');

const allBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
    if (!books) {
      return res.status(404).json({ message: 'No book found' });
    }
    return res.status(200).json({ books });
  } catch (err) {
    console.log(err);
  }
};

const bookById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById({ _id: id });
    if (!book) {
      return res.status(404).json({ message: 'No book found' });
    }
    return res.status(200).json({ book });
  } catch (err) {
    console.log(err);
  }
};

const addBook = async (req, res) => {
  const { name, author, desc, price, img, available } = req.body;

  const book = new Book({name, author, price, img, available})

  try {
const book = 
  }
  catch(err) {
console.log(err)
  }

};

module.exports = { allBooks, bookById };
