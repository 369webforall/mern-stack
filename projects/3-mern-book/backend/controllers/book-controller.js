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

  let book;
  try {
    book = new Book({ name, author, desc, price, img, available });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: 'Book not added' });
  }
  return res.status(202).json({ book });
};

const updateBook = async (req, res) => {
  const { name, author, desc, price, img, available } = req.body;
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      desc,
      price,
      img,
      available,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: 'Book not updated' });
  }
  return res.status(202).json({ book });
};

const deleteBook =async (req, res)=>{
  const id = req.params.id;
  let book;
  try {
book = await Book.findByIdAndRemove(id)
  }catch(err){
    console.log(err)
  }

  if (!book) {
    return res.status(500).json({ message: 'not deleted' });
  }
  return res.status(202).json({ message: "Book is deleted" });
}
module.exports = { allBooks, bookById, addBook, updateBook, deleteBook };
