export interface IAnimals {
  wildAnimals: IWildAnimals[],
  pets: IPets[]
}

export interface IWildAnimals {
  name: string;
  id: number;
}

export interface IPets {
  name: string;
  id: number;
}
