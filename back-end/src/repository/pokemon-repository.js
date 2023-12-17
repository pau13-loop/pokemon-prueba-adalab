const Pokemon = require('../db/models/pokemon');

const PokemonRepositoryAPI = (function singletonPokemonRepository() {

  const getAllPokemons = async () => {
    const response = await Pokemon.find();
    return response;
  }

  const getOnePokemon = async (name) => {
    const response = await Pokemon.find({ name }).exec();
    return response;
  }

  const getPokemonSpecies = async (name) => {
    const response = await Pokemon.find({ name }).exec();
    return response;
  }

  return {
    getAllPokemons,
    getOnePokemon,
    getPokemonSpecies
  }
})();

exports.PokemonRepositoryAPI = PokemonRepositoryAPI;