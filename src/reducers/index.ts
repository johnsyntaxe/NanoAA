import saveData from './saveDate';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    saveData: saveData,
});

export default rootReducer;