export interface IPerson {
  name: string,
  player1: string,
  player2: string
}

export interface ITeam {
  name: string,
  value: string
}

export interface IPlayer {
  GT: string[],
  CSK: string[],
  MI: string[],
  DC: string[],
  KKR: string[],
  LSG: string[],
  PBKS: string[],
  RR: string[],
  SRH: string[],
  RCB: string[]
}

export type ITeamName = 'GT'
  | 'CSK'
  | 'MI'
  | 'DC'
  | 'KKR'
  | 'LSG'
  | 'PBKS'
  | 'RR'
  | 'SRH'
  | 'RCB'
