const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: false,
    },
    operate: {
        type: [String],
        required: false,
    }
});

module.exports = mongoose.model("Item", ItemSchema);