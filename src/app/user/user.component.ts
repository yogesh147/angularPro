import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {

  users: any = [];
  constructor() { }

  ngOnInit() {
    this.users = [{  name: 'a', class: "A", city: 'x' },
    { name: 'b', class: "B", city: 'y' },
    { name: 'c', class: "C", city: 'z' }]
  }

}
