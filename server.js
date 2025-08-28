const express = require("express"); // importing express

const app = express(); // calling express to use in the future

const port = 3000; // creating a port

// our express sever is listening in port 3000
app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
