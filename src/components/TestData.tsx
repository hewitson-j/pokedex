interface genderProps {
  id: number;
  genderType: string;
  genderChar: string;
}

const genderArray: genderProps[] = [
  { id: 0, genderType: "Male and Female", genderChar: "♂ and ♀" },
  { id: 1, genderType: "Female only", genderChar: "♀" },
  { id: 3, genderType: "Male only", genderChar: "♂" },
  { id: 4, genderType: "Undefined", genderChar: "???" },
];

interface TypeProps {
  id: number;
  type: string;
  color?: string;
}

const typeArray: TypeProps[] = [
  { id: 0, type: "Fire", color: "#EE8130" },
  { id: 1, type: "Water", color: "#6390F0" },
  { id: 2, type: "Grass", color: "#7AC74C" },
  { id: 3, type: "Normal", color: "#A8A77A" },
  { id: 4, type: "Electric", color: "#F7D02C" },
  { id: 5, type: "Ice", color: "#96D9D6" },
  { id: 6, type: "Fighting", color: "#C22E28" },
  { id: 7, type: "Poison", color: "#A33EA1" },
  { id: 8, type: "Ground", color: "#E2BF65" },
  { id: 9, type: "Flying", color: "#A98FF3" },
  { id: 10, type: "Psychic", color: "#F95587" },
  { id: 11, type: "Bug", color: "#A6B91A" },
  { id: 12, type: "Rock", color: "#B6A136" },
  { id: 13, type: "Ghost", color: "#735797" },
  { id: 14, type: "Dragon", color: "#6F35FC" },
  { id: 15, type: "Dark", color: "#705746" },
  { id: 16, type: "Steel", color: "#B7B7CE" },
  { id: 17, type: "Fairy", color: "#D685AD" },
  { id: 18, type: "???", color: "#04c991" },
];

export interface TestDataProps {
  id: number;
  dexId: number;
  name: string;
  description: string;
  height: number;
  weight: number;
  gender: number;
  type1: number;
  type2?: number;
  image?: string;
  alt?: string;
}

const testDataArray: TestDataProps[] = [
  {
    id: 0,
    dexId: 1,
    name: "Bulbasaur",
    description: "Bulbasaur Description",
    height: 1.5,
    weight: 250,
    gender: 0,
    type1: 2,
    type2: 7,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/375px-0001Bulbasaur.png",
    alt: "Bulbasaur",
  },
  {
    id: 1,
    dexId: 4,
    name: "Charmander",
    description: "Charmander Description",
    height: 1.5,
    weight: 250,
    gender: 0,
    type1: 0,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/375px-0004Charmander.png",
    alt: "Charmander",
  },
  {
    id: 2,
    dexId: 7,
    name: "Squirtle",
    description: "Squirtle Description",
    height: 1.5,
    weight: 250,
    gender: 0,
    type1: 1,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/375px-0007Squirtle.png",
    alt: "Squirtle",
  },
  {
    id: 3,
    dexId: 25,
    name: "Pikachu",
    description:
      "	When it is angered, it immediately discharges the energy stored in the pouches in its cheeks. When several of these Pokémon gather, their electricity can build and cause lightning storms.",
    height: 1.5,
    weight: 250,
    gender: 0,
    type1: 4,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/375px-0025Pikachu.png",
    alt: "Pikachu",
  },
  {
    id: 4,
    dexId: 151,
    name: "Mew",
    description: "Mew Description",
    height: 1.5,
    weight: 250,
    gender: 0,
    type1: 10,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/375px-0151Mew.png",
    alt: "Mew",
  },
];

export { testDataArray, genderArray, typeArray };
