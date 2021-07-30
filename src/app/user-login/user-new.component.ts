import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-user-new',
  templateUrl: './user-new.component.html',
})

export class UserNewComponent implements OnInit {

  users: any = [];
  constructor() { }

  ngOnInit() {}
  
}
