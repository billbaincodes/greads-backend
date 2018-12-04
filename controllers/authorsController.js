const knex = require("../db/connection");

const getAll = (req, res, next) => {
  knex
    .select("*")
    .from("authors")
    .then(authors => res.json({ authors: authors }));
};

module.exports = {
  getAll
};
