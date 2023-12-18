const Pokemon = require('../db/models/pokemon');
const PokemonDetail = require('../db/models/pokemon-detail');
const PokemonSpecies = require('../db/models/pokemon-species');

const PokemonRepositoryAPI = (function singletonPokemonRepository() {

  const getAllPokemons = async () => {
    const response = await Pokemon.find();
    return response;
  }

  const getOnePokemon = async (name) => {
    const response = await PokemonDetail.find({ name }).exec();
    return response;
  }

  const getPokemonSpecies = async (name) => {
    const response = await PokemonSpecies.find({ name }).exec();
    return response;
  }

  return {
    getAllPokemons,
    getOnePokemon,
    getPokemonSpecies
  }
})();

exports.PokemonRepositoryAPI = PokemonRepositoryAPI;