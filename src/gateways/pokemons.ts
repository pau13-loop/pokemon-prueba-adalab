const PokemonGateway = () => {
  const getAllPokeomons = async () => {
    const response = await fetch(`${process.env.POKEMON_API_BASE_URL}/pokemon?limit=151`);

    if (!response.ok || response.status !== 200) return;

    const data = await response.json();
    return data;
  };

  const getPokemonByUrl = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok || response.status !== 200) return;

    const data = await response.json();
    return data;
  };

  const getPokemonSpecieById = async (idPokemon: number) => {
    const response = await fetch(`${process.env.POKEMON_API_BASE_URL}/pokemon-species/${idPokemon}`);

    if (!response.ok || response.status !== 200) return;

    const data = await response.json();
    return data;
  };

  const getPokemonById = async (id: string) => {
    const response = await fetch(`${process.env.POKEMON_API_BASE_URL}/pokemon/${id}`);

    if (!response.ok || response.status !== 200) return;

    const data = await response.json();
    return data;
  };

  return {
    getAllPokeomons,
    getPokemonByUrl,
    getPokemonSpecieById,
    getPokemonById
  }
}

export default PokemonGateway;