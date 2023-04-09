export interface Cards {
  id: string
  name: string
  nationalPokedexNumber?: number
  imageUrl: string
  imageUrlHiRes: string
  supertype: string
  subtype: string
  ability?: Ability
  hp?: string
  retreatCost?: string[]
  convertedRetreatCost?: number
  number: string
  artist: string
  rarity: string
  series: string
  set: string
  setCode: string
  text?: string[]
  attacks?: Attack[]
  weaknesses?: Weakness[]
  type: string
  resistances?: Resistance[]
  evolvesFrom?: string
}

export interface Ability {
  name: string
  text: string
  type: string
}

export interface Attack {
  cost: string[]
  name: string
  text: string
  damage: string
  convertedEnergyCost: number
}

export interface Weakness {
  type: string
  value: string
}

export interface Resistance {
  type: string
  value: string
}

// export class Cards {
//   id: string;
//   name: string;
//   imageUrl: string;

//   constructor(id: string, name: string,imageUrl:string) {
//       this.id = id;
//       this.name = name;
//       this.imageUrl = imageUrl;
//   }

// }