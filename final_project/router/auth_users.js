const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];
const secretKey = 'key';

const isValid = (username) => { //returns boolean
  if (users.some(user => user.username === username)) {
    return false;
  } else {
    return true;
  }
}

const authenticatedUser = (username, password) => {
  if (users.some(user => user.username === username && user.password === password)) {
    return true;
  } else {
    return false;
  }
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (authenticatedUser(username, password)) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    req.session.token = token;
    return res.status(200).json({ message: "Customer Logged In Successfully" });
  }
  return res.status(300).json({ message: "Invalid Credentials" });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const { review } = req.body;

  if (req.session.token) {
    try {
      const decoded = jwt.verify(req.session.token, secretKey);
      if (!books[isbn]) {
        return res.status(404).json({ message: "Book not found" });
      }
      if (!books[isbn].reviews) {
        books[isbn].reviews = {};
      }

      books[isbn].reviews[decoded.username] = review;

      return res.status(200).json({ message: "Review added successfully" });
    } catch (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
  } else {
    return res.status(401).json({ message: "Please log in first" });
  }
});

// Delete a book review
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }
  const username = req.user.username;
  if (!books[isbn].reviews) {
    return res.status(404).json({ message: "No reviews found for this book" });
  }
  if (!books[isbn].reviews[username]) {
    return res.status(404).json({ message: "You haven't reviewed this book" });
  }
  delete books[isbn].reviews[username];
  return res.status(200).json({ message: "Review deleted successfully" });
});



module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
