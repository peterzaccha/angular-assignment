import { createReducer, on } from '@ngrx/store';
import { Coffee } from './coffee';
import { coffeesFetchAPISuccess } from './coffees.action';

export const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
  initialState,
  on(coffeesFetchAPISuccess, (_, { coffees }) => coffees)
);
