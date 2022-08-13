import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
})
export class Block1Component implements OnInit {
  @Input() stop = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStop() {

  }
}
