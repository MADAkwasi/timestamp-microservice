const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const dateRouter = require("./Routes/Router");
const addressRouter = require("./Routes/whoAmIRouter");

dotenv.config({
  path: "./config.env",
});

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));

app.use("/api/v1/whoami", addressRouter);
app.use("/api/v1/", dateRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
