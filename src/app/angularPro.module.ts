import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgJhipsterModule,
    HttpClientModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgJhipsterModule,
    HttpClientModule
  ]
})

export class AngularProModule { }
