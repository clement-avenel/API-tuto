const Data = require('../data/stupid.json');

exports.index = (req, res) => {
    res.json(Data)
};

exports.getUserByPhone = (req, res) => {
    const phoneNumber = req.query.phone;
    let response = [];

    Object.entries(Data.people).forEach(([key, value]) => {
        Object.entries(value.phoneNumber).forEach(([k, v]) => {
            if (v.number == phoneNumber) {
                response.push(Data.people[key]);
            }
        });
    });

    res.json(response);
};