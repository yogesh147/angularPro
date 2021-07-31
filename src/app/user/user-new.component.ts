import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserDomain } from './userDomain';

@Component({
  selector: 'jhi-user-new',
  templateUrl: './user-new.component.html',
})

export class UserNewComponent implements OnInit {

  user: any;
  constructor(public location: Location) { }

  ngOnInit() { }

  goToPrevPage() {
    this.location.back();
  }

}
