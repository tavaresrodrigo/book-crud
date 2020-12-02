const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//test
const MONGODB_URI = "mongodb+srv://sean:yhXILpC45HYdLqxA@cluster0.g1ksv.mongodb.net/book-crud?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose working");
});

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    description: String,
    published: Boolean
});

const Book = mongoose.model("Book", BookSchema);

const data = {
    title: "Test4",
    description: "Test4 describtion",
    published: true
    
};

const newBook = new Book(data);

newBook.save((error) => {
    if (error){
        console.log("Something went wrong");
    } else {
        console.log("Book created");
    }
})


//test end

const db = require("./app/models");
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
  res.json({ message: "Welcome to our application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});