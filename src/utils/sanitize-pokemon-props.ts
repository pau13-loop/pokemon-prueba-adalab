import { IPokemon } from "../interfaces/pokemon";

export function sanitizePokemonProps(pokemonData: any, pokemonSpecies: any): IPokemon {
  return {
    id: pokemonData.id,
    name: pokemonData.name,
    types: pokemonData.types,
    evolvesFrom: pokemonSpecies.evolves_from_species ? pokemonSpecies.evolves_from_species.name : '',
    image: pokemonData.sprites.front_default,
  }
}