import { Component, OnInit } from '@angular/core';
import { CommonService } from '../backend/common.service';
import { UserService } from './user.service';

@Component({
  selector: 'jhi-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {

  users: any = [];
  constructor(public userService: UserService, public commonService: CommonService) { }

  ngOnInit() {
    // this.users = this.userService.getAllUsers(); // by local Storage
    this.commonService.GetAllUsers().subscribe(data => this.users = data);
  }

  deleteUser(id: any) {
    // this.userService.deleteUserById(id); // by local Storage
    this.commonService.deleteUser(id)
      .subscribe((data: { data: any; }) => { alert(data.data); this.ngOnInit(); },
       (error: any) => console.log('On Deleting ::', error));
  }

}
