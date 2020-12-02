module.exports = app => {
  const Books = require("../controllers/Book.controller.js");

  var router = require("express").Router();

  // Create a new Book
  router.post("/", Books.create);

  // Retrieve all Books
  router.get("/", Books.findAll);

  // Retrieve all published Books
  router.get("/published", Books.findAllPublished);

  // Retrieve a single Book with id
  router.get("/:id", Books.findOne);

  // Update a Book with id
  router.put("/:id", Books.update);

  // Delete a Book with id
  router.delete("/:id", Books.delete);

  // Create a new Book
  router.delete("/", Books.deleteAll);

  app.use("/api/Books", router);
};
  