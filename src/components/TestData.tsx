interface genderProps {
  id: number;
  genderType: string;
}

const genderArray: genderProps[] = [
  { id: 0, genderType: "Male and Female" },
  { id: 1, genderType: "Female only" },
  { id: 3, genderType: "Male only" },
  { id: 4, genderType: "Undefined" },
];

interface TypeProps {
  id: number;
  type: string;
}

const typeArray: TypeProps[] = [
  { id: 0, type: "Fire" },
  { id: 1, type: "Water" },
  { id: 2, type: "Grass" },
  { id: 3, type: "Normal" },
  { id: 4, type: "Electric" },
  { id: 5, type: "Ice" },
  { id: 6, type: "Fighting" },
  { id: 7, type: "Poison" },
  { id: 8, type: "Ground" },
  { id: 9, type: "Flying" },
  { id: 10, type: "Psychic" },
  { id: 11, type: "Bug" },
  { id: 12, type: "Rock" },
  { id: 13, type: "Ghost" },
  { id: 14, type: "Dragon" },
  { id: 15, type: "Dark" },
  { id: 16, type: "Steel" },
  { id: 17, type: "Fairy" },
  { id: 18, type: "???" },
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
    description: "Pikachu Description",
    height: 1.5,
    weight: 250,
    gender: 0,
    type1: 1,
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
    type1: 1,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/375px-0151Mew.png",
    alt: "Mew",
  },
];

export { testDataArray, genderArray, typeArray };
