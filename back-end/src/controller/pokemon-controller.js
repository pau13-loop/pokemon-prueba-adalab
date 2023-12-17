const responseFormatter = require('../../utils/response-formatter');
const pokemonRepositoryAPI = require('../repository/pokemon-repository');

const pokemonAPI = (function singletonPokemonAPI() {

  const getAllPokemons = ((req, res, next) => {
    pokemonRepositoryAPI.PokemonRepositoryAPI.getAllPokemons()
      .then(pokemons => {
        const response = responseFormatter(null, pokemons, 'Request pokemons findAll successful');
        res.status(200).type('json').json(response);
      })
      .catch(err => {
        const response = responseFormatter(err);
        response.status(500).type('json').json(response);
      });
  });

  const getOnePokemon = ((req, res, next) => {
    pokemonRepositoryAPI.PokemonRepositoryAPI.getOnePokemon(req.params.name)
      .then(pokemon => {
        const response = responseFormatter(null, pokemon, 'Request pokemons findAll successful');
        res.status(200).type('json').json(response);
      })
      .catch(err => {
        const response = responseFormatter(err);
        response.status(500).type('json').json(response);
      });
  });

  const getPokemonSpecies = ((req, res, next) => {
    pokemonRepositoryAPI.PokemonRepositoryAPI.getPokemonSpecies(req.params.name)
      .then(pokemon => {
        const response = responseFormatter(null, pokemon, 'Request pokemons findAll successful');
        res.status(200).type('json').json(response);
      })
      .catch(err => {
        const response = responseFormatter(err);
        response.status(500).type('json').json(response);
      });
  });

  return {
    getAllPokemons,
    getOnePokemon,
    getPokemonSpecies
  }
})();

exports.pokemonAPI = pokemonAPI;