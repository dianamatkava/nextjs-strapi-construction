import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();

  selectPage(link: string) {
    this.pageName.emit(link);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
