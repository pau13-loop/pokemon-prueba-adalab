import { PokemonDetail } from "./components/pokemon-detail/pokemon-detail";
import { PokemonList } from "./components/pokemon-list/pokemon-list";


const Pokemon = () => {

  return (
    <>
      <h1>Hello world this is Pokemon Page</h1>

      <PokemonList />
      <PokemonDetail />
    </>

  )
};

export { Pokemon };