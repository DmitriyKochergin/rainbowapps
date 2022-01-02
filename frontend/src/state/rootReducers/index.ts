import { combineReducers } from 'redux';

import filterReducer from '../filter/reducer';
import { SelectApplication } from '../filter/actions';


const appReducers = combineReducers({
  filter: filterReducer,
});

const rootReducers = (state: ReturnType<typeof appReducers> | undefined, action: SelectApplication) => {
  return appReducers(state, action);
};

export default rootReducers;
