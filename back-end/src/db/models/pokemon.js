const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

PokemonSchema.pre(['find'], function () {
    this.select('_id name url');
});

module.exports = mongoose.model('pokemon', PokemonSchema, 'pokemon');