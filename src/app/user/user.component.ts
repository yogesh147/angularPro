import { Component, OnInit } from '@angular/core';
import { CommonService } from '../backend/common.service';
import { UserSpringService } from './user-spring.service';
import { UserService } from './user.service';

@Component({
  selector: 'jhi-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {

  users: any = [];
  constructor(public userService: UserService,
    public commonService: CommonService,
    public userSpringSvc: UserSpringService) { }

  ngOnInit() {
    // this.users = this.userService.getAllUsers(); // by local Storage
    // this.commonService.GetAllUsers().subscribe(data => this.users = data); // by express-mongoose-nodejs server
    this.getAllUsers();
  }


  async deleteUser(id: any) {
    // this.userService.deleteUserById(id); // by local Storage
    const promise: any = await <any>this.commonService.deleteUser(id);
    if (promise.data == 'Record has been Deleted..!!') this.ngOnInit();
  }

  // get from java-mongo server data

  async getAllUsers() {
    const promise: any = await <any>this.userSpringSvc.getAllUsers();
    if(promise.length>0) this.users = promise;
  }

  async deleteMongoUser(id: any) {
    const promise: any = await <any>this.userSpringSvc.deleteUser(id);
    if (promise.id !=null) this.ngOnInit();
  }

}
