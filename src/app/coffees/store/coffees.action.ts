import { createAction, props } from '@ngrx/store';
import { Coffee } from './coffee';
 
export const invokeCoffeesAPI = createAction(
  '[Coffee API] Invoke Coffees Fetch API'
);
 
export const coffeesFetchAPISuccess = createAction(
  '[Coffee API] Fetch API Success',
  props<{ coffees: Coffee[] }>()
);
