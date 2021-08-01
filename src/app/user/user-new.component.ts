import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public route: ActivatedRoute) { }

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
      this.userService.updateUser(this.user);
    } else {
      this.userService.saveUser(this.user);
    }
  }

  getUser() {
    const data = this.userService.getUserById(this.userId);
    if (data != null) {
      this.user = data;
    }
  }

}
