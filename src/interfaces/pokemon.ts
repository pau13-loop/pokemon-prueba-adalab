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