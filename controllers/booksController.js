const knex = require("../db/connection");

const getAll = (req, res, next) => {
  knex
    .select("*")
    .from("books")
    .orderBy('id', 'asc')
    .then(books => res.json({ books: books }));
};

const newBook = (req, res, next) => {
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
      .then(newBook => res.json({ newBook: newBook[0] }));
  }
};

const deleteBook = (req, res, next) => {
  id = parseInt(req.params.id);
  console.log(id);

  knex("books")
    .where("id", id)
    .delete()
    .returning("*")
    .then(deletedBook => res.json({ deletedBook: deletedBook[0] }));
};

const updateBook = (req, res, next) => {
  id = parseInt(req.params.id);
  body = req.body;

  knex("books")
    .where("id", id)
    .update(body)
    .returning("*")
    .then(updatedBook => {
      res.json({ updatedBook: updatedBook[0] });
    });
};

module.exports = {
  getAll,
  newBook,
  deleteBook,
  updateBook
};
