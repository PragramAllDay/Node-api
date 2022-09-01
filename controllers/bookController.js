const Book = require("../model/Book");
const mongoose = require("mongoose");
const express = require("express");
const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error.message);
  }
  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};
const addBooks = async (req, res) => {
  let book;
  const { name, author, description, price, available, image } = req.body;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error.message);
  }
  if (!book) {
    return res
      .status(500)
      .json({ message: "Unable to proceed with your request" });
  } else return res.status(200).json({ book });
};
const getById = async (req, res) => {
  const Id = req.params.id;
  let book;
  try {
    book = await Book.findById(Id);
  } catch (error) {
    console.log(error.message);
  }
  if (!book) {
    return res.status(404).json({ message: "Cannot find the product" });
  }
  return res.status(200).json({ book });
};
const updateBook = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (error) {
    console.log(error.message);
  }
  if (!book) {
    return res.status(404).json({ message: "Cannot update the product" });
  }
  return res.status(200).json({ book });
};
const deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "Cannot Delete the product" });
  }
  return res.status(200).json({ book });
};
exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
