import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeesRoutingModule } from './coffees-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from './store/coffees.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoffeesEffect } from './store/coffees.effect';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { ViewComponent } from './view/view.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent, ViewComponent],
  imports: [
    CommonModule,
    CoffeesRoutingModule,
    StoreModule.forFeature('coffees', coffeeReducer),
    EffectsModule.forFeature([CoffeesEffect]),
    MatTableModule,
    MatPaginatorModule,
    LayoutModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class CoffeesModule {}
