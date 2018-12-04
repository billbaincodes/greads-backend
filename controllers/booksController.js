const knex = require("../db/connection");

const getAll = (req, res, next) => {
  knex
    .select("*")
    .from("books")
    .then(books => res.json({ books: books }));
};

const newPost = (req, res, next) => {
  body = req.body;
  console.log(req.body.title.length);
  if (
    req.body.title.length === 0 ||
    req.body.genre.length === 0 ||
    req.body.description.length === 0 ||
    req.body.coverURL.length === 0
  ) {
    res.status(422).json("Invalid Input");
  } else {
    knex
      .from("books")
      .insert(body)
      .returning("*")
      .then(newBook => res.json({ newBook: newBook }));
  }
};

module.exports = {
  getAll,
  newPost
};
