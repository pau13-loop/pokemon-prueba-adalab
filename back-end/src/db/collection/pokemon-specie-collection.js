module.exports = [
  {
    "name": "bulbasaur",
    "evolves_from_species": null,
  },
  {
    "name": "ivysaur",
    "evolves_from_species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
  },
  {
    "name": "venusaur",
    "evolves_from_species": {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
    },
  }
];