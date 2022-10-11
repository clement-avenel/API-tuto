const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.getUserByName = (name, response) => {
let resurt = Data.people;
let names = [];

  for (const person of resurt) {
    names.push(person.name);
  };

  response.json(names);
};