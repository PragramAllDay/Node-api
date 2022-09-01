const express = require("express");
const server = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/bookController");

server.get("/", booksController.getAllBooks);
server.post("/", booksController.addBooks);
server.get("/:id", booksController.getById);
server.put("/:id", booksController.updateBook);
server.delete("/:id", booksController.deleteBook);

module.exports = server;
