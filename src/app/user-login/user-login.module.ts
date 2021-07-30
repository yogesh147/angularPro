import { NgModule } from '@angular/core';
import { userRoutes } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';
import { RouterModule } from '@angular/router';
import { AngularProModule } from '../angularPro.module';

@NgModule({
  imports: [
    AngularProModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    UserLoginComponent,
  ],
  providers: [],
  bootstrap: [UserLoginComponent],
})

export class UserLoginModule { }
