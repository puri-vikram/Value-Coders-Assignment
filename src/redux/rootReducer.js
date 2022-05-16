import { combineReducers } from 'redux';
import stepsReducer from './Steps/steps.reducer'

const rootReducer = combineReducers({
    steps: stepsReducer
});

export default rootReducer;