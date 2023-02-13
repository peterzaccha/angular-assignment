import { select, Store } from '@ngrx/store';
import { invokeCoffeesAPI } from '../store/coffees.action';
import { coffeeSelector } from '../store/coffees.selector';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Coffee } from '../store/coffee';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'id',
    'blend_name',
    'origin',
    'variety',
    'notes',
    'intensifier',
    'action',
  ];
  dataSource = new MatTableDataSource<Coffee>();
  smallView = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  coffees$ = this.store.pipe(select(coffeeSelector));

  constructor(private store: Store, breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.smallView = result.matches;
      });
  }

  ngOnInit(): void {
    this.store.dispatch(invokeCoffeesAPI());
    this.coffees$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
