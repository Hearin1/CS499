const statusData = require('../../data/status.json');

const list = async (req, res) => {
  return res.status(200).json(statusData);
};

module.exports = { list };
