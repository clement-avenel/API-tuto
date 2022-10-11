const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.get_people_number= (req, res) => {
  myPeople =Data.people[0];
  res.json(myPeople['phoneNumber'][0]['number']);
};