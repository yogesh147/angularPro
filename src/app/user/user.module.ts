import { NgModule } from '@angular/core';
import { userRoutes } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { AngularProModule } from '../angularPro.module';

@NgModule({
  imports: [
    AngularProModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    UserComponent,
  ],
  providers: [],
  bootstrap: [UserComponent],
})

export class UserModule { }
