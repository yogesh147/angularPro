import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-user-login',
  templateUrl: './user-login.component.html',
})

export class UserLoginComponent implements OnInit {

  users: any = [];
  constructor() { }

  ngOnInit() {
    this.users = [{ name: 'a', class: "A", city: 'x' },
    { name: 'b', class: "B", city: 'y' },
    { name: 'c', class: "C", city: 'z' }]
  }

}
