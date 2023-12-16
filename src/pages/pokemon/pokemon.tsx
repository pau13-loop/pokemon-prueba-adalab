import { useState } from "react";
import { PokemonDetail } from "./components/pokemon-card/pokemon-card";
import { PokemonList } from "./components/pokemon-list/pokemon-list";
import { Input } from "../../components/input";


const Pokemon = () => {
  const [filterValue, setFilterValue] = useState<string>('');

  const handleFilter = (value: string) => {
    setFilterValue(value);
  }



  return (
    <>
      <div className="flex flexCenter">
        <Input
          name="Filtro pokemons"
          placeholder="Filtra pokemons por nombre..."
          onInput={handleFilter}
        />
      </div>

      <PokemonList />
      <PokemonDetail />
    </>

  )
};

export { Pokemon };