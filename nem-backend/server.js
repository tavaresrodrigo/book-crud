const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const listEndpoints = require('express-list-endpoints');


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// //test

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//     console.log("Mongoose working");
// });

// const Schema = mongoose.Schema;
// const BookSchema = new Schema({
//     title: String,
//     description: String,
//     published: Boolean
// });

// const Book = mongoose.model("Book", BookSchema);

// const data = {
//     title: "Test4",
//     description: "Test4 describtion",
//     published: true
    
// };

// const newBook = new Book(data);

// newBook.save((error) => {
//     if (error){
//         console.log("Something went wrong");
//     } else {
//         console.log("Book created");
//     }
// })


//test end

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the book library application - TUDublin Web Application Architecture" });
});

// Importing routes
require("./app/routes/books.routes")(app);
require("./app/routes/users.routes")(app);

// Creating user Role collection

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(listEndpoints(app));
});