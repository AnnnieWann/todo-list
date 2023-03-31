const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

// mongodb+srv://annie:wan@cluster.do56qa3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
