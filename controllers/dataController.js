const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.getUserByName = (name, res) => {
  let file = JSON.parse(res.json(Data));
  file = "ouais";
};