const express = require("express");
const path = require("path");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
