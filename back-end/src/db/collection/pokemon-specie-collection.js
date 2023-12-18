module.exports = [
  {
    "name": "bulbasaur",
    "evolves": null,
  },
  {
    "name": "ivysaur",
    "evolves": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
  },
  {
    "name": "venusaur",
    "evolves": {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
    },
  }
];