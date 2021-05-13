import { Component, OnInit } from '@angular/core';
import {interval, Subscription, Observable, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  sub: Subscription;
  stream$: Subject<number> = new Subject<number>();
  counter = 0;
  constructor() {
    this.sub = this.stream$.subscribe(value => console.log('Subscribe ', value));
  }

  ngOnInit(): void {
  }

  stop() {
    this.sub.unsubscribe();
  }

  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }
}
