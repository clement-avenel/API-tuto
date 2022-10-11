const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.insert = (req, res) =>{
 res.json(Data.people.push({name:'Rodrigue', age:20, address:{streetAddress:"test",city:"rouen",postalCode:"76000",state:'test'},phoneNumber:"5"}))
};

exports.delete = (req, res) => {
  res.json(Data.people.pop())
};

exports.getUsersName = (req, res) => {
  res.json(Data.people.map((i, index) => {
    return Data.people[index].name
  })
  )  
};
