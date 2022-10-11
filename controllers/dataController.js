const req = require('express/lib/request');
const Data = require('../data/stupid.json');

exports.index = (req, res) => {
  res.json(Data)
};

exports.getAdresse = (req, res) => {
  arrayAddress = [];
  Data['people'].forEach(element => {
    arrayAddress.push(element['address']);
  });
  res.json(arrayAddress);
};