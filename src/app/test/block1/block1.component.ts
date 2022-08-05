import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
})
export class Block1Component implements OnInit {
  public child = {name: 'Name', value: 99};

  constructor() { }

  onChild(value: number) {
    this.child[value]
  }

  ngOnInit(): void {
  }

}
