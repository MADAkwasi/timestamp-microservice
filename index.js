const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const router = require("./Routes/Router");

dotenv.config({
  path: "./config.env",
});

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
