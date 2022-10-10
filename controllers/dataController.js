const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};