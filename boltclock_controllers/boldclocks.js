// import our models
const Ideopoiima = require("../rec_models/ideopoiima");


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

exports.bedg_init = async (req, res) =>
{
    console.log("Initializing DB...");
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
            },
            {
                title: "Chacuterie",
                desc: "Gamon,salami,Glygo karidaki,Ham-maker,smoke pyrex,mix-nuts,Halloumi,bedger chickpea dip,chickpea flatbreads, workers pie",
            }
            
        ]);
        console.log("Initialized.");
    } catch (error)
    {
        console.log("[Initializing] err: ", error);
        res.status(500).send("Error initializing DB");
    }
};

exports.bedg_find = async (req, res) =>
{
    try {
        const recs = await Ideopoiima.find();
        res.json(recs);
    } catch (error) {
        console.log("[Finding] err: ", error);
        res.status(500).send("Error finding records");
    }
};

exports.add_ideopoiima = async (req, res) => {
    const { title, desc } = req.body;

    try {
        const newIdeop = new Ideopoiima({ title, desc });
        await newIdeop.save();
        res.status(201).json(newIdeopoiima);
    } catch (error) {
        console.log("[Adding] err: ", error);
        res.status(500).send("Error adding Ideopoiima");
    }
};

exports.edit_ideopoiima = async (req, res) => {
    const { id } = req.params;
    const { title, desc } = req.body;

    try {
        const editedIdeop = await Ideopoiima.findByIdAndUpdate(id, { title, desc }, { new: true });
        if (!editedIdeop) {
            return res.status(404).send("Ideopoiima not found");
        }
        res.json(editedIdeop);

    } catch (error) {
        console.log("[Updating] err: ", error);
        res.status(500).send("Error updating Ideopoiima");
    }

};

exports.delete_ideopoiima = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedIdeopoiima = await Ideopoiima.findByIdAndDelete(id);
        if (!deletedIdeopoiima) {
            return res.status(404).send("Ideopoiima not found");
        }
        res.json({ message: "Ideopoiima deleted" });
    } catch (error) {
        console.log("[Deleting] err: ", error);
        res.status(500).send("Error deleting Ideopoiima");
    }
};