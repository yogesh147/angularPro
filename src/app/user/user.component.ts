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

  async deleteUser(id: any) {
    // this.userService.deleteUserById(id); // by local Storage
    const promise: any = await <any>this.commonService.deleteUser(id);
    if (promise.data == 'Record has been Deleted..!!') this.ngOnInit();
  }

}
