exports.isValidDate = (str) => {
  const date = new Date(str);

  return !isNaN(date.getTime());
};

exports.isValidUnixTimestamp = (timestampString) => {
  const timestamp = Number(timestampString);

  return !isNaN(timestamp) && isFinite(timestamp) && timestamp > 0;
};
