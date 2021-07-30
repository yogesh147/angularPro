import { NgModule } from '@angular/core';
import { userRoutes } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { AngularProModule } from '../angularPro.module';
import { UserNewComponent } from './user-new.component';

@NgModule({
  imports: [
    AngularProModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    UserComponent,
    UserNewComponent
  ],
  providers: [],
})

export class UserModule { }
