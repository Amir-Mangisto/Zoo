const mongoose = require("mongoose");
const CONNECTION_STRING = process.env.CONNECTION_STRING;
mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo is connected"))
  .catch((err) => console.log(err, "error"));

module.exports = mongoose.connection; //exporting the connection itself
