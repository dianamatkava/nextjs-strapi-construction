import { Component, OnInit,
        OnChanges, SimpleChanges, DoCheck,
       AfterContentInit, AfterContentChecked,
       AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit, OnChanges, DoCheck,
          AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public objs = [{name: 'Name', age: 22}];
  public value = 'some value';

  constructor() {
    console.log('constructor')
   }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
    console.log(changes)    // return every variables that was changed
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


  onChildtAdded(objData:{name: string, age: number}) {
    this.objs.push({name: objData.name, age: objData.age});
  }


}


//constructor
//ngOnChanges
//ngOnInit and every time when some of the parametrs was changed
//ngDoCheck and every time on eny events (interactions)
//ngAfterContentInit call only once after page loaded
//ngAfterContentChecked and every time after any chenge detection cycle (after ngDoCheck)
//ngAfterViewInit
//ngAfterViewChecked and every time after any chenge detection cycle (after ngAfterContentChecked)
//ngOnDestroy once component was removed from the DOM (example: delete item)
