import * as types from 'state/filter/actionTypes';
import { ActionsTypes } from 'state/filter/actions';

export interface FilterState {
  currentApplication: string | undefined;
}

const initialState: FilterState = {
  currentApplication: undefined,
};

const reducer = (state = initialState, action: ActionsTypes): FilterState => {
  switch (action.type) {
    case types.SELECT_APPLICATION:
      return { ...state, currentApplication: action.payload };
    default:
      return state;
  }
};

export default reducer;
