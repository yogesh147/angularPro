import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule,
    NgJhipsterModule,
    AppRoutingModule,
  ],
  exports:[ CommonModule,
    FormsModule,
    NgJhipsterModule],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
