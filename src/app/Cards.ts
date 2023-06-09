export interface Cards {
  id: string
  name: string
  imageUrl: string
  hp: any
  attacks?: Attack[]
  weaknesses?: Weakness[]
  type: string
}

export interface Attack {
  name: string
  damage: string
}

export interface Weakness {
  type: string
  value: string
}


