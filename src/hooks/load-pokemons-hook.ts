import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/pokemon";
import { sanitizePokemonProps } from "../utils/sanitize-pokemon-props";
import PokemonGateway from "../gateways/pokemons";

const useLoadPokemons = () => {
  const [loading, setLoading] = useState(false);
  const [countPokemonList, setCountPokemonList] = useState(0);
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await PokemonGateway().getAllPokeomons();

      setCountPokemonList(response.count);
      await handlePokemonList(response.results);

      setLoading(false);
    })();
  }, [])

  const handlePokemonList = async (pokemonList: { name: string, url: string }[]) => {
    const pokemonSanitizedDataTemp: IPokemon[] = await Promise.all(pokemonList.map(async (pokemon) => {
      const pokemonData = await PokemonGateway().getPokemonByUrl(pokemon.url);
      const pokemonSpecies = await PokemonGateway().getPokemonSpecieById(pokemonData.id);

      return sanitizePokemonProps(pokemonData, pokemonSpecies);
    }));

    setPokemonList(pokemonSanitizedDataTemp.sort((a, b) => a.id - b.id));
  };

  return {
    loading,
    countPokemonList,
    pokemonList
  }
}

export default useLoadPokemons;