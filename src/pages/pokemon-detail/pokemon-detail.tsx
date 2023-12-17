// LIBRARY IMPORTS
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// LOCAL IMPORTS
import { Table, TableHeader, TextElementTable } from '../../components/table/table';
import PokemonGateway from '../../gateways/pokemons';
// STYLES IMPORTS
import './styles.scss';

interface PokemonDetail {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    back_default: string;
    back_shiny: string;
    front_shiny: string;
  };
  moves: {
    move: {
      name: string;
      url: string;
    }
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    }
  }[];
}

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    (async () => {
      const pokemon = await PokemonGateway().getPokemonById(id);
      setPokemon(pokemon);
    })();
  }, [id]);

  const onGoBack = () => {
    navigate('/');
  };

  return (
    <div className='m-2 containerPokemonDetail'>
      <div className='mh-600'>
        {/* Title */}
        <TableHeader
          title={`Pokemon: ${pokemon?.name}`}
          onClose={onGoBack}
        />

        {/* Left Table Images */}
        <div className='flexRow'>
          <div className='w-30 containerImages'>
            <TableHeader
              title="Imágenes"
            />
            <Table className='p-1 flexRow flexWrap flexCenter'>
              {pokemon?.sprites.front_default && <img src={pokemon.sprites.front_default} alt={`Imagen delantera del pokemon ${pokemon.name}`} />}
              {pokemon?.sprites.back_default && <img src={pokemon.sprites.back_default} alt={`Imagen trasera del pokemon ${pokemon.name}`} />}
              {pokemon?.sprites.back_shiny && <img src={pokemon.sprites.back_shiny} alt={`Imagen trasera brillante del pokemon ${pokemon.name}`} />}
              {pokemon?.sprites.front_shiny && <img src={pokemon.sprites.front_shiny} alt={`Imagen delantera brillante del pokemon ${pokemon.name}`} />}
            </Table>
          </div>

          {/* Right Table Detail Pokemon */}
          <div className='w-70 containerText'>
            <TableHeader
              title="Información relevante"
            />
            <Table className='p-1'>
              {pokemon &&
                <>
                  <TextElementTable text={`Peso: ${pokemon.weight / 10} kg`} />
                  <TextElementTable text={`Altura: ${pokemon.height / 10} m`} />
                  <TextElementTable text={`Habilidades: ${pokemon.abilities.map(element => `${element.ability.name}`)}`} />
                  <TextElementTable text={`Movimientos: ${pokemon.moves.map(element => `${element.move.name}`)}`} />
                </>
              }
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;