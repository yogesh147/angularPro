import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'jhi-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {

  users: any = [];
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

  deleteUser(id: any) {
    this.userService.deleteUserById(id);
  }

}
