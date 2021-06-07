import shuffle from 'lodash.shuffle';
import data from './data';

export type Character = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

export const fetchCharacter = (): Promise<Character> => {
  const [character] = shuffle(data);
  return Promise.resolve(character);
};
