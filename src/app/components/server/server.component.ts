import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
    .Online {
      font-weight: bold;
    }
  `
  ]
})
export class ServerComponent implements OnInit {
  @Input() userName: string = ''
  serverId: number = 10;
  userStatus: string = ''


  constructor() {
    this.userStatus = Math.random() > 0.5? 'Online': 'Offline'
  }

  getColor() {
    return this.userStatus === 'Online'? 'green': 'red'
  }


  ngOnInit(): void {
  }


}
