//database connection for both productDB and userDB Collection
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Mern-Furniture", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});





module.exports = {
  mongoose, // Export the mongoose instance
  db,      // Export the connection object for error handling
};