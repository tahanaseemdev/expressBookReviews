const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (isValid(username)) {
    users.push({
      "username": username,
      "password": password
    });
    res.status(200).json({ message: "Customer Successfully Registered! Now you can log in" });
  } else {
    return res.status(400).json({ message: "User already exists" });
  }
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  return res.status(200).send(JSON.stringify(books));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).send(JSON.stringify(books[isbn]));
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  for (const key in books) {
    if (books.hasOwnProperty(key)) {
      if (books[key].author == author) {
        return res.status(200).send(JSON.stringify(books[key]));
      };
    }
  }
  res.status(400).json({ message: "Book not found" });
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  for (const key in books) {
    if (books[key].title == title) {
      return res.status(200).send(JSON.stringify(books[key]));
    }
  }
  res.status(400).json({ message: "Book not found" });
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).send(JSON.stringify(books[isbn].reviews));
});

// Get list of books using asyn/await
public_users.get('/async', async function (req, res) {
  const dbBooks = await JSON.stringify(books);
  return res.status(200).send(dbBooks);
});

// Search by ISBN using promises
public_users.get('/promise/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  Promise.resolve(books[isbn])
    .then(function (book) {
      res.status(200).send(JSON.stringify(book));
    });
});

// Search by author using promises
public_users.get('/promise/author/:author', function (req, res) {
  const author = req.params.author;
  Promise.resolve().then(function () {
    for (const key in books) {
      if (books.hasOwnProperty(key)) {
        if (books[key].author == author) {
          return res.status(200).send(JSON.stringify(books[key]));
        }
      }
    }
    res.status(400).json({ message: "Book not found" });
  });
});

// Search by title using promises
public_users.get('/promise/title/:title', function (req, res) {
  const title = req.params.title;
  Promise.resolve().then(function () {
    for (const key in books) {
      if (books[key].title == title) {
        return res.status(200).send(JSON.stringify(books[key]));
      }
    }
    res.status(400).json({ message: "Book not found" });
  });
});


module.exports.general = public_users;

