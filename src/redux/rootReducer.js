import { combineReducers } from 'redux';
import stepsReducer from './Steps/steps.reducer'
import allDataReducer from './FormData/form-data.reducer'

const rootReducer = combineReducers({
    steps: stepsReducer,
    all_data: allDataReducer
});

export default rootReducer;