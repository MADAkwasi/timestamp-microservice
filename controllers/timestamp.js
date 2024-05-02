const { isValidDate, isValidUnixTimestamp } = require("../helper/date-checker");

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
