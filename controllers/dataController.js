const DATA = require('../data/stupid.json');

exports.InsertPeople = (req, res) => {

  let newPeople = {
    "name": "Victor",
    "age": "20",
    address : {
      "streetAdress" : "43 Route de Rouen",
      "city" : "Rouen",
      "state": "France",
      "postalCode": "76000"
    },
    phoneNumber:{
      "type": "home",
      "number": "544-855-965"
    }
  }

  res.json(DATA.people.push(newPeople))
};

exports.DeletePeople = (req, res) => {
  res.json(DATA.people.pop())
};

exports.GetAge = (req, res) => {
  res.json(DATA.people.map((i, index) => {
    return DATA.people[index].age;
  }))
};

exports.GetPeople = (req, res) => {
  res.json(DATA.people)
};
