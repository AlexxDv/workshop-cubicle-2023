const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        // Add http/https validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    }
})

const Cube = model('Cube', cubeSchema) // "Cube" е името, което даваме на модела

module.exports = Cube;