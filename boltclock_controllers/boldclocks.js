// import our models
const artifisciellment = require("./rec_models/artifisciellment");
const item = require("./rec_models/item");

exports.simple = (req, res) =>
{
    res.json({ massage: 'Boltclock function triggered. ' });
};

exports.quote = (req, res) =>
{
    res.json({ quote: 'Bedging data in Json!' });

};

exports.bedgingit = (req, res) =>
{
    const { arg1, arg2 } = req.body;
    res.json({ data: `Values are ${arg1} and ${arg2}`, code: `|${arg1}${arg2}` });
};