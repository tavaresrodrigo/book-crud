module.exports = app => {
  const Users = require("../controllers/User.controller");

  var router = require("express").Router();

  // Create a new User
  router.post("/users", Users.create);

  // Retrieve all Users
  router.get("/users", Users.findAll);

  // Retrieve all Admin Users
  router.get("/users/admins", Users.findAllAdmin);

  // Retrieve a single User with id
  router.get("/users/:id", Users.findOne);

  // Update a User with id
  router.put("/users/:id", Users.update);

  // Delete a User with id
  router.delete("/users/:id", Users.delete);

  // Delete a user
  router.delete("/users", Users.deleteAll);

  app.use("/api/Users", router);
};
  