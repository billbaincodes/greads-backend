exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", function(table) {
    table.increments();
    table.string("title");
    table.string("genre");
    table.string("description", 2000);
    table.string("coverURL");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};
