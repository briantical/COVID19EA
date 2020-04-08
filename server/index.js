const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Include CORS security feature in server
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api");

app.listen(PORT, () => {
  console.log(`Covid19ea Server is listening on PORT ${PORT}`);
});
