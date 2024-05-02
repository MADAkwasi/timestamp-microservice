const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

exports.timestamp = async (req, res) => {
  try {
    // if (isValidDate(req.params.date)) throw new Error("Invalid Date");

    const date = new Date(req.params.date);

    res.status(200).json({
      status: "success",
      data: {
        unixKey: date.getTime() / 1000,
        utcDate: date.toISOString(),
      },
    });
  } catch (_) {
    res.status(400).json({
      status: "error",
      message: "Invalid Date",
    });
  }
};

exports.noParams = (_, res) => {
  res.status(200).json({
    status: "success",
    data: {
      unixKey: new Date().getTime() / 1000,
      utcDate: new Date().toISOString(),
    },
  });
};

exports.whoAmI = async (req, res) => {
  const response = await fetch("https://api.ipify.org?format=json");
  const { ip } = await response.json();

  res.status(200).json({
    status: "success",
    data: {
      ipaddress: ip,
      language: req.headers["accept-language"],
      software: req.headers["user-agent"],
    },
  });
};
