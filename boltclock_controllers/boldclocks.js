// import our models
const artifisciellment = require("../rec_models/artifisciellment");


const item = require("../rec_models/item");

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

<<<<<<< HEAD
exports.bedg_init = async (req, res) =>
=======

exports.init = async () =>
    {
    
};
    
exports.bedging_Add = async () =>
>>>>>>> 22b87665a3b552b1355d113de120221bf6a760dc
{
    try
    {
        await Ideopoiima.insertMany([
            {
                title: "Screwberry creamoda",
                desc: "Strawberry cream soda with yolk/aquafaba, vanilla, asiline and milk/yogart.",
            },
            {
                title: "Multitool",
                desc: "Bourbon whisky,cognac,yolk/aquafaba,cream liquera and vanilla.",
            }
        ]);
    } catch (error)
    {
        console.log("err", + error);
    }
};

exports.bedg_find = async () =>
{
    const bedg = await Ideopoiima.find();
    if (bedg)
    {
        res.json(bedg)
    } else
    {
        res.send("Something wrong.");
    }
};
