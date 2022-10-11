const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data);
};

exports.getFirstUserAddress = (req, res) => {
  let user = 0;
  res.json(Data.people[user].address);
};
