import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { oneCoffeeSelector } from '../store/coffees.selector';
import { Observable } from 'rxjs';
import { Coffee } from '../store/coffee';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, OnDestroy {
  id!: number;
  private route_sub: any;
  coffee: Coffee | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route_sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.store
        .pipe(select(oneCoffeeSelector(this.id)))
        .subscribe((c) => (this.coffee = c));
    });
  }

  ngOnDestroy(): void {
    this.route_sub.unsubscribe();
  }
}
