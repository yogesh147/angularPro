import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgJhipsterModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgJhipsterModule
  ]
})

export class AngularProModule { }
