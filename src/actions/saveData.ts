import {datas, SaveDataType, MyActionType} from '../types/action'

export function saveData(data:datas[]): MyActionType { 
  return {
    type: SaveDataType.SAVE_DATAS,
    value: data,
  };
}