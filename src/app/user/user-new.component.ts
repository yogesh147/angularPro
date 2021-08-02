import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../backend/common.service';
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
    public commonService: CommonService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    if (this.userId != null) this.getUser();
  }

  goToPrevPage() {
    this.location.back();
  }

  save() {
    if (this.userId) {
      this.user.mode = 'Update';
      // this.userService.updateUser(this.user); // by local Storage
    } else {
      // this.userService.saveUser(this.user); // by local Storage
      this.user.mode = 'Save';
      this.commonService.saveUser(this.user)
        .subscribe((data: { data: any; }) => {
          alert(data.data);
          this.location.back();
          this.ngOnInit();
        }, (error: any) => console.log('On Saving ::', error));
    }
  }

  getUser() {
    /* const data = this.userService.getUserById(this.userId);
    if (data != null) {
      this.user = data;
    } */ //  by local Storage
    // this.commonService.GetUserById(this.userId)
    //   .subscribe((data: { data: any; }) => { this.user = data; alert(data.data); this.ngOnInit(); },
    //    (error: any) => console.log('On Getting By Id ::', error));
  
  }

}
