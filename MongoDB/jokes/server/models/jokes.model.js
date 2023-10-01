const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    setUp: {
        type: String,
        required: [true, "Set up is required"],
        minlength: [5, "Set up must be at least 5 characters"]
    },
    punchLine: {
        type: String,
        required: [true, "Punch line is required"],
        minlength: [2, "Punch line must be at least 2 characters"]
    }
}, {timestamps: true})

const Jokes = mongoose.model('Jokes', JokesSchema)

module.exports = Jokes