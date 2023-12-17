export interface IPokemon {
  id: number;
  name: string;
  evolvesFrom: string;
  types: IPokemonType[];
  image: string;
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string
  }
}

export interface IPokemonDetail {
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