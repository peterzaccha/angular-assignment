import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CoffeesService } from '../coffees.service';
import { coffeesFetchAPISuccess, invokeCoffeesAPI } from './coffees.action';
import { coffeeSelector } from './coffees.selector';

@Injectable()
export class CoffeesEffect {
  constructor(
    private actions$: Actions,
    private coffeesService: CoffeesService,
    private store: Store
  ) {}

  loadCoffees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeCoffeesAPI),
      withLatestFrom(this.store.pipe(select(coffeeSelector))),
      mergeMap(([, coffees]) => {
        if (coffees.length > 0) {
          return EMPTY;
        }
        return this.coffeesService
          .get()
          .pipe(map((data: any) => coffeesFetchAPISuccess({ coffees: data })));
      })
    )
  );
}
