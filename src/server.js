const express = require("express");
const app = express();
require("dotenv").config();
// require("./db");

// parse requests of content-type - applcation/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mysql application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
