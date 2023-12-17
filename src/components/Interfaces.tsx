type PokemonType = {
  id: number;
  dex_id: number;
  name: string;
  description: string;
  height: number;
  weight: number;
  gender: number;
  type1: number;
  type2?: number | null;
  image_url: string;
};

export interface TypeProps {
  id: number;
  name: string;
  color?: string;
}

export interface GenderProps {
  id: number;
  name: string;
  description: string;
}

export default PokemonType;
