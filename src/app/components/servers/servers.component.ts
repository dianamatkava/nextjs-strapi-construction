import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName: string = ''
  created: boolean = false
  users = ['User 1', 'User 2']


  onSetUserName() {
    this.users.push(this.userName)
    this.created = true
  }

  onReset() {
    this.userName = ''
    this.created = false
  }

  constructor() {

  }

  ngOnInit(): void {
  }


}
