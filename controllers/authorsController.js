const knex = require("../db/connection");

const getAll = (req, res, next) => {
  knex
    .select("*")
    .from("authors")
    .orderBy("id", "asc")
    .then(authors => res.json({ authors: authors }));
};

const getOne = (req, res, next) => {
  id = req.params.id

  knex
    .from("authors")
    .where("id", id)
    .then(author => res.json({ author : author[0] }))
};

const newAuthor = (req, res, next) => {
  body = req.body;

  if (
    req.body.first.length === 0 ||
    req.body.last.length === 0 ||
    req.body.bio.length === 0 ||
    req.body.portraitURL.length === 0
  ) {
    res.status(422).json("Invalid Input");
  } else {
    knex
      .from("authors")
      .insert(body)
      .returning("*")
      .then(newAuthor => res.json({ newAuthor: newAuthor[0] }));
  }
};

const deleteAuthor = (req, res, next) => {
  id = req.params.id

  knex.from("authors")
  .where("id", id)
  .delete()
  .returning("*")
  .then(deletedAuthor => res.json({ deletedAuthor : deletedAuthor[0]}))
};

const updateAuthor = (req, res, next) => {
  id = parseInt(req.params.id);
  body = req.body;

  if (
    req.body.first.length === 0 ||
    req.body.last.length === 0 ||
    req.body.bio.length === 0 ||
    req.body.portraitURL.length === 0
  ) {
    res.status(422).json("Invalid Input");
  } else {
    knex("authors")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedAuthor => {
        res.json({ updatedAuthor: updatedAuthor[0] });
      });
  }
};


module.exports = {
  getAll,
  getOne,
  newAuthor,
  deleteAuthor,
  updateAuthor
};
