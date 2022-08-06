import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
})
export class Block1Component implements OnInit {
  @Output() objCreated = new EventEmitter<{name: string, age: number}>();

  constructor() { }

  onAddObj() {
    this.objCreated.emit({name: 'Name', age: 22});
  }

  ngOnInit(): void {
  }

}
