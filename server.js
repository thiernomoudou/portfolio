const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.set("port", process.env.PORT || 3001);

app.use(bodyParser.json());

//  Enable CORS for the express server
app.use(cors());
app.options('*', cors());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

app.get("/welcome", (req, res) => {
    res.send("Welcome to my site");
  });

app.post("/sending_email", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    name: req.body.name || null,
    email: req.body.email || null,
    text: req.body.text || null
});
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
