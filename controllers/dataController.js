const Data = require('../data/stupid.json');

exports.getPhoneNumbers = (req, res) => {
    
    var result = [];

    for (var peoples of Data.people)

        for (var phoneNumbers of peoples.phoneNumber)

            result.push(phoneNumbers.number) ;

    res.send(result);
};


exports.index = (req, res) => {
    res.json(Data);
};