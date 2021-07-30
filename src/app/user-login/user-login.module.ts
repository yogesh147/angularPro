import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userRoutes } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgJhipsterModule,
    RouterModule.forChild(userRoutes),
  ],
  exports: [CommonModule,
    FormsModule,
    NgbModule,
    NgJhipsterModule],
  providers: [],
  bootstrap: [UserLoginComponent],

})
export class UserLoginModule { }
