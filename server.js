const express = require("express"); // importing express
const dotenv = require("dotenv"); // import dotenv
dotenv.config(); // using dotenv

const app = express(); // calling express to use in the future

const port = process.env.PORT; // using port from our .env file

app.use(express.json()); // middleware to parse json data

let fruitData = ["apple", "Pear", "Golden Kiwi", "Mango"];

app.get("/", (req, res) => {
  res.json(fruitData); // send the fruitData to the client
});

app.get("/:id", (req, res) => {
  let data = fruitData[req.params.id];
  res.json(data);
});

app.post("/", (req, res) => {
  let data = req.body; // grabbing the data the client entered from the req.body
  fruitData.push(data.fruit); // pushing the data into fruitData
  res.json(fruitData); // send the updated fruitData as a json
});

app.put("/:id", (req, res) => {
  let data = fruitData[req.params.id];
  res.json(data);
});

app.delete("/:id", (req, res) => {
  let data = fruitData[req.params.id];
  res.json(data);
});

// our express sever is listening in port 3000
app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
