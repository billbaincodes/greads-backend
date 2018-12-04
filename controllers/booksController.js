const knex = require("../db/connection");

const getAll = (req, res, next) => {
  knex
    .select("*")
    .from("books")
    .then(books => res.json({ books: books }));
};

const newPost = (req, res, next) => {
  body = req.body
  
  knex
    .from("books")
    .insert(body)
    .returning("*")
    .then(newBook => res.json({ newBook: newBook }));
};

module.exports = {
  getAll,
  newPost
};
