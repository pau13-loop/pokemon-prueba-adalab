var express = require('express');
var router = express.Router();

// CONTROLLER
const PokemonController = require('../controller/pokemon-controller');

// ROUTER LEVEL MIDDLEWARE
router.use(function (req, res, next) {
  console.log(req.url);
  console.log(req.body);
  next();
});

//* CATEGORY ROUTES *//
router.get('/pokemon', PokemonController.pokemonAPI.getAllPokemons);
router.get('/:name', PokemonController.pokemonAPI.getOnePokemon);
router.get('/species/:name', PokemonController.pokemonAPI.getPokemonSpecies);

module.exports = router;