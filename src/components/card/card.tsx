import { FC } from "react";
import { IPokemon, IPokemonType } from "../../interfaces/pokemon";
import './styles.scss';

interface IProps {
  pokemon: IPokemon;
  onSelectCard?: (id: number) => void;
}

const CardTop: FC<IProps> = (props) => {
  const { pokemon } = props;

  return (
    <div className="h-50 flexCol relative cardTop">
      {/* Mejorar el escalado de la imagen */}
      <img src={pokemon.image} alt={`imagen del pokemon ${pokemon.name}`} className="imgCard" />
      <p className="absolute m-0 titleTop">{`ID / ${pokemon.id}`}</p>
    </div>
  )
};

const CardBottom: FC<IProps> = (props) => {
  const { pokemon } = props;

  return (
    <div className="h-50 pl-1 pr-1">
      {/* Name */}
      <h3 className="titleBottom">{pokemon.name}</h3>

      {/* Types */}
      <div className="flexRow containerTypes">
        {pokemon.types.map((typePokemon: IPokemonType, index: number) => {
          return (
            <p key={`${pokemon.id}_${index}`} className="m-0 fs-xs type">
              {typePokemon.type.name.toUpperCase()}
            </p>
          )
        })}
      </div>

      {/* Higlited */}
      <div className="hightLight">
        {pokemon.evolvesFrom &&
          <>
            <p className="fs-xs evolutionLabel">Evoluciona de:</p>
            <p className="fs-md evolutionValue">{pokemon.evolvesFrom}</p>
          </>
        }
      </div>
    </div>
  )
}

const Card: FC<IProps> = (props) => {
  const { pokemon, onSelectCard } = props;

  return (
    <div className="flexCol card" onClick={() => onSelectCard && onSelectCard(pokemon.id)}>
      <CardTop pokemon={pokemon} />
      <CardBottom pokemon={pokemon} />
    </div>
  )
};

export { Card, CardTop, CardBottom };