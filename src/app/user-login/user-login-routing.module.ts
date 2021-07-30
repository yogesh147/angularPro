import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login.component';
import { UserNewComponent } from './user-new.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
  },
  {
    path: 'new',
    component: UserNewComponent,
  }
];

