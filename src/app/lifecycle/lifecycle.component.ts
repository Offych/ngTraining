import { Component, OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  ngOnChanges(): void {
    console.log('In the onChanges')
  }
  constructor() { 
    console.log('In costructor');
  }

  ngOnInit(): void {
    console.log('In the ngOnInit')
  }
  
  ngDoCheck() {
    console.log('In ngDoCheck')
  }
  ngAfterContentInit() {
    console.log('In the ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('In the ngAfterContentChecked')
  }
  ngAfterViewChecked(): void {
    console.log('In the ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('In the ngAfterViewInit')
  }
  
  ngOnDestroy(): void {
    console.log('In the ngOnDestroy')
  }


  
}
