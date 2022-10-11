const { param } = require('../api-routes');
const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.getUserByName = (req, res) => {
let resurt = Data.people;
let age = [];
let nameParam = req.params.name;


  for (const person of resurt) {
    if(person.name === nameParam){
      age = person.age;
    }
  };

  res.json(age);
};