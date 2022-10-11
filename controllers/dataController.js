const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.getOnlyUsersPhonesNumbers = (req, res) => {
  let phoneNumbers = [];
  let users = Data.people;
  for (user of users){
    phoneNumbers.push(user.phoneNumber)
  }
  res.json(phoneNumbers)
};