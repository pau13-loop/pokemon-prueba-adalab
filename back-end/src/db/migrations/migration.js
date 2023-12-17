const { MongoClient } = require("mongodb");
require('dotenv').config();

//* COLLECTIONS *//
const pokemonCollection = require('../collection/pokemon-collection');
const pokemonDetailCollection = require('../collection/pokemon-detail-collection');
const pokemonSpecieCollection = require('../collection/pokemon-specie-collection');

//* URI *//
const uri = process.env.MONGO_ATLAS
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('adalab-pokemon');
    const pokemon = database.collection('pokemon');
    const pokemonDetail = database.collection('pokemon-detail');
    const pokemonSpecies = database.collection('pokemon-species');

    let numPokemonsDocs = await pokemon.estimatedDocumentCount();
    let numPokemonDetailDocs = await pokemonDetail.estimatedDocumentCount();
    let numPokemonSpeciesDocs = await pokemonSpecies.estimatedDocumentCount();


    if (numPokemonsDocs > 0) {
      await pokemon.drop().then((successMessage) => {
        console.log(`Droped pokemons ${successMessage}`);
      });
    }
    if (numPokemonDetailDocs > 0) {
      await pokemonDetail.drop().then((successMessage) => {
        console.log(`Droped pokemon-details ${successMessage}`);
      });
    }
    if (numPokemonSpeciesDocs > 0) {
      await pokemonSpecies.drop().then((successMessage) => {
        console.log(`Droped pokemon-species ${successMessage}`);
      });
    }

      let result = await pokemon.insertMany(pokemonCollection);
      console.log(`${result.insertedCount} == 151 pokemons inserted into DB`);

      let resultDetail = await pokemonDetail.insertMany(pokemonDetailCollection);
      console.log(`${resultDetail.insertedCount} == 1 pokemon-details inserted into DB`);

      let resultSpecie = await pokemonSpecies.insertMany(pokemonSpecieCollection);
      console.log(`${resultSpecie.insertedCount} == 3 pokemon-species inserted into DB`);
  } catch (e) {
    console.error(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);