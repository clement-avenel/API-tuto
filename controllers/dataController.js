const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.getUserByPhoneNumber = (req, res) => {
  const phoneNumbers = req.query.phone;
  let users = [];

  for (user of Data.people) {
    users.push(user.phoneNumber);
  }

  res.json(users);

};
