import { api } from '.';

interface CharacterParams {
  name: string;
  status: CharacterStatus
  species: string;
  type: string;
  gender: CharacterGender
}

const CHARACTER_PATHS = {
  GetAllCharacters: (params?: CharacterParams) => {
    const queryString = new URLSearchParams({ ...params }).toString();
    return `/character?${queryString}`;
  },
  GetCharacter: (id: string) => `/character/${id}`,
};

export enum CharacterStatus {
  Alive = 'alive',
  Dead = 'dead',
  Unknown = 'unknown',
}

export enum CharacterGender {
  Female = 'female',
  Male = 'male',
  Genderless = 'genderless',
  Unknown = 'unknown',
}

type CharacterMetaData = {
  name: string
  url: string
};

export interface Character {
  id: string;
  species: string;
  type: string;
  name: string;
  image: string;
  episode: string[]
  status: CharacterStatus
  gender: CharacterGender;
  origin: CharacterMetaData
  location: CharacterMetaData
}

export async function getAllCharacters(/* params?: CharacterParams */) {
  try {
    const response = await api.get(CHARACTER_PATHS.GetAllCharacters());
    return response.data;
  } catch (error) {
    console.log('ERROR!', error);
  }
}
