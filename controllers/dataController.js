const Data = require('../data/stupid.json');

exports.index = (req, res) => { 
  res.json(Data) 
};

exports.getPhoneNumber = (req, res) => { 
  
  var result = []
  for(var people of Data.people){ 
    for(var phoneNumber of people.phoneNumber)
      result.push(phoneNumber.number)
  }

  res.send(result)

};


