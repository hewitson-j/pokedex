type PokemonData = {
  id: number;
  dex_id: number;
  name: string;
  description: string;
  height: number;
  weight: number;
  gender: number;
  type1: number;
  type2: number | null;
  imageUrl: string;
};

export default PokemonData;
