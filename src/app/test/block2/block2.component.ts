import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html'
})
export class Block2Component implements OnInit {
  @Output() intervalNum = new EventEmitter<number>();
  interval: any;
  num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalNum.emit(this.num+1);
      this.num++;
    }, 1000)
  }

}
