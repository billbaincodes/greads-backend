exports.up = function(knex, Promise) {
  return knex.schema.createTable("authors", function(table) {
    table.increments();
    table.string("first");
    table.string("last");
    table.string("bio", 2000);
    table.string("portraitURL");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("authors");
};
