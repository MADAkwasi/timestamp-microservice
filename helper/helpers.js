exports.isValidDate = (str) => {
  const date = new Date(str);

  return !isNaN(date.getTime());
};

exports.isValidUnixTimestamp = (timestampString) => {
  const timestamp = Number(timestampString);

  return !isNaN(timestamp) && isFinite(timestamp) && timestamp > 0;
};

exports.getIpAddress = async () => {
  try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (response.ok) {
          const data = await response.json();
          return data.ip;
      } else {
          console.error('Failed to fetch IP address:', response.statusText);
          return null;
      }
  } catch (error) {
      console.error('Error fetching IP address:', error.message);
      return null;
  }
}