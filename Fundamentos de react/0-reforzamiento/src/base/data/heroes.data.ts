// type Owner="DC" | "Marvel";

export interface Hero{
    id:number;
    name:string;
    owner:Owner;
}

export enum Owner {
    DC="DC",
    MARVEL="MARVEL"
}

export const heroes:Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.MARVEL,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.MARVEL,
  },
  {
    id:6,
    name:"Gree Lantern",
    owner: Owner.DC
  }
];

