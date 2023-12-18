const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSpecieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  evolves: {
    type: Object,
    required: true
  }
});

PokemonSpecieSchema.pre(['find'], function () {
  this.select('_id name evolves');
});

module.exports = mongoose.model('pokemon-species', PokemonSpecieSchema, 'pokemon-species');