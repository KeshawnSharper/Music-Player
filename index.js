const server = require('./server');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
// Replace the uri string with your MongoDB deployment's connection string.
mongoose.connect(process.env.MONGODB_URI,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("hurray! We connected");
});
server.listen(PORT,"0.0.0.0", () => {
    
  console.log(`Listening on port ${PORT}...`);
});

module.exports = server