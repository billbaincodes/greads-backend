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

const getBooksByAuthor = (req, res, next) => {
  id = req.params.id

  return knex
    .select("books.title", "books.id", "authors.first", "authors.last")
    .from("books")
    .innerJoin("books_authors", "books.id", "books_authors.book_id")
    .innerJoin("authors", "authors.id", "books_authors.author_id")
    .where("authors.id", id)
    .then(details => {
      res.json({
        details: details
      });
    });


}

module.exports = {
  getAll,
  getBooksByAuthor
};
