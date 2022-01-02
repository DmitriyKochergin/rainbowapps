import { createSelector } from 'reselect';
import { RootState } from 'common/store';
import { FilterState } from 'state/filter/reducer';

export const FilterSelector = createSelector([(state: RootState): FilterState => state.filter], (filter): FilterState => filter);
