const Data = require('../data/stupid.json');

exports.index = (req, res) => {
    res.json(Data)
};

exports.getUserByPhone = (req, res) => {
    const phoneNumber = req.params.phoneNumber;
    let users = [];

    Object.entries(Data.people).forEach(([key, value]) => {
        Object.entries(value.phoneNumber).forEach(([k, v]) => {
            if (v.number == phoneNumber) {
                users.push(Data.people[key]);
            }
        });
    });

    res.json(users);
};