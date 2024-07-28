const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const artifisciellmentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model("Ideopoiima", artifisciellmentSchema);