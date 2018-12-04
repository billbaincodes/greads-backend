exports.up = function(knex, Promise) {
  return knex.schema.createTable("books_authors", function(table) {
    table.increments();
    table
      .integer("book_id")
      .references("books.id")
      .unsigned()
      .onDelete("cascade");
    table
      .integer("author_id")
      .references("authors.id")
      .unsigned()
      .onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books_authors");
};
