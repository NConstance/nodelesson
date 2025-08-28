const express = require("express"); // importing express
const dotenv = require("dotenv"); // import dotenv
dotenv.config(); // using dotenv

const app = express(); // calling express to use in the future

const port = process.env.PORT; // using port from our .env file

let fruitData = ["apple", "Pear", "Golden Kiwi", "Mango"];

app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.json("Hello World");
});

// our express sever is listening in port 3000
app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
