import { Input } from "../../components/input";
import useLoadPokemons from "../../hooks/load-pokemons-hook";
import { Card } from "../../components/card";
import { useState } from "react";
import './styles.scss';
import { Spinner } from "../../components/spinner";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const navigate = useNavigate();
  const { countPokemonList, pokemonList, loading } = useLoadPokemons();
  const [filterValue, setFilterValue] = useState<string>('');

  const handleFilter = (value: string) => {
    setFilterValue(value);
  }

  const handleSelectCard = (id: number) => {
    navigate(`/${id}`);
  };

  if (loading) { return <Spinner /> }
  else if (countPokemonList === 0) { return <p>No se han podido encontrar pokemons</p> }
  return (
    <div className="flexCol flexCenter p-1">
      <div className="flexRow flexCenter w-80">
        <Input
          name="Filtro pokemons"
          placeholder="Filtra pokemons por nombre..."
          onInput={handleFilter}
        />
      </div>

      <div className="mh-1000 w-80 container">
        <div className="flexRow g-1 cardContainer">
          {pokemonList.map((pokemon) => {
            if (filterValue === '' || pokemon.name.startsWith(filterValue))
              return (
                <Card key={`${pokemon.name}_${pokemon.id}`} pokemon={pokemon} onSelectCard={handleSelectCard} />
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default PokemonList;