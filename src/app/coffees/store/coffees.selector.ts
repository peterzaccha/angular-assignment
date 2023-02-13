import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Coffee } from './coffee';

export const coffeeSelector = createFeatureSelector<Coffee[]>('coffees');

export const oneCoffeeSelector = (id: number) =>
  createSelector(coffeeSelector, (coffees: Coffee[]) =>
    coffees.find((c: Coffee) => c.id == id)
  )!;
