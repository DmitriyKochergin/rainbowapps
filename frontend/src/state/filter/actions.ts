import * as types from 'state/filter/actionTypes';

// All Actions Types
export type ActionsTypes = SelectApplication;

// Select Application
export type SelectApplication = { type: typeof types.SELECT_APPLICATION, payload: string | undefined };
export const selectApplication = (payload: string | undefined): SelectApplication => ({ type: types.SELECT_APPLICATION, payload });
