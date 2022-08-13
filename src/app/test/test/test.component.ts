import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  num = 0;
  range = [0];

  constructor() {
   }

  ngOnInit(): void {
  }

  onStart(num: number) {
    console.log(num)
    this.range.push(num);
  }


}
