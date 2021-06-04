export interface Animals {
  wildAnimals: WildAnimals[],
  pets: Pets[]
}

export interface WildAnimals {
  name: string;
  id: number;
}

export interface Pets {
  name: string;
  id: number;
}
