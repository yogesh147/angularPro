import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../backend/common.service';
import { UserSpringService } from './user-spring.service';
import { UserService } from './user.service';
import { UserDomain } from './userDomain';

@Component({
  selector: 'jhi-user-new',
  templateUrl: './user-new.component.html',
})

export class UserNewComponent implements OnInit {

  user: any = new UserDomain;
  userId: any;
  constructor(public location: Location,
    public userService: UserService,
    public route: ActivatedRoute,
    public commonService: CommonService,
    public userSpringSvc: UserSpringService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    if (this.userId != null) {
      // this.getUser(); // by express-mongoose-nodejs server
      this.getUserById();
    }
  }

  goToPrevPage() {
    this.location.back();
  }

  async save() {
    if (this.userId) {
      this.user.mode = 'Update';
      // this.userService.updateUser(this.user); // by local Storage
      const promise: any = await <any>this.commonService.updateUser(this.user);
    } else {
      // this.userService.saveUser(this.user); // by local Storage
      this.user.mode = 'Save';
      this.commonService.saveUser(this.user)
        .subscribe((data: any) => {
          alert(data.data);
          this.location.back();
          this.ngOnInit();
        }, (error: any) => console.log('On Saving ::', error));
    }
  }

  async getUser() {
    /* const data = this.userService.getUserById(this.userId);
    if (data != null) {
      this.user = data;
    } */ //  by local Storage
    const promise: any = await <any>this.commonService.GetUserById(this.userId);
    if (promise.data.length > 0) {
      this.user = promise.data[0];
    }
  }

  // get/save from java-mongo server data

  async saveUser() {
    if (this.userId) {
      const promise: any = await <any>this.userSpringSvc.updateUser(this.user);
      if (promise.id !=null) this.goToPrevPage();
    } else {
      const promise: any = await <any>this.userSpringSvc.saveUser(this.user);
      if (promise.id !=null) this.goToPrevPage();
    }
  }

  async getUserById() {
    const promise: any = await <any>this.userSpringSvc.getUserById(this.userId);
    if (promise.length > 0) this.user = promise[0];
  }


}
