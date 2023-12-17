const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonDetailSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: number,
    required: true
  },
  height: {
    type: number,
    required: true
  },
  sprites: {
    type: Object,
    required: true
  },
  moves: {
    type: Array,
    required: true
  },
  abilities: {
    type: Array,
    required: true
  },
});

PokemonDetailSchema.pre(['find'], function () {
  this.select('_id name weight height sprites moves abilities');
});

module.exports = mongoose.model('pokemon-detail', PokemonDetailSchema, 'pokemon-detail');