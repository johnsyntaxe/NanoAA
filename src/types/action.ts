

export interface datas {
  id?:number,
  vote_average?: number,
  commentaire?: number
  city?:string,
  location?:string,
  overview?:string,
  poster_path?:string
}

export enum SaveDataType {
  SAVE_DATAS = 'SAVE_DATAS',
  FORCE = 'FORCE'
}

export type MyActionType = {
  type:SaveDataType
  value:datas[],
}

export type SomeActionType = SaveDataType & MyActionType

