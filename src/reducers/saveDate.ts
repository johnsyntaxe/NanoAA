import SAVE_DATA from "../actions";
import { SomeActionType, SaveDataType, datas } from "../types/action";

const initialState = {data:[]};

export default function saveData(state = initialState, action:SomeActionType) {
  switch (action.type) {
    case SaveDataType.SAVE_DATAS:
      return {
        ...state,
        data: action.value
      };
    default:
      return state
  }
}