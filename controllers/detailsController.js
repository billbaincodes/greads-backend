const knex = require("../db/connection");


const getAll = (req, res, next) => {
  return knex
    .select("*")
    .from("books")
    .innerJoin("books_authors", "books.id", "books_authors.book_id")
    .innerJoin("authors", "authors.id", "books_authors.author_id")
    .then(details => {
      res.json({
        details: details
      });
    });
}

module.exports = {
  getAll
};
