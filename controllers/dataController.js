const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.getOnlyUsersNumbers = (req, res) => {
  let phoneNumber = [];
  let users = Data.people;
  for (user of users){
    phoneNumber.push(user.phoneNumber)
  }
  res.json(phoneNumber)
};