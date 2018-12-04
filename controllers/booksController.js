const knex = require("../db/connection");

const getAll = (req, res, next) => {
  knex
    .select("*")
    .from("books")
    .then(books => res.json({ books: books }));
};

module.exports = {
  getAll
};
