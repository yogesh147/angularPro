import { Routes } from '@angular/router';
import { UserNewComponent } from './user-new.component';
import { UserComponent } from './user.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'new',
    component: UserNewComponent,
  },
  {
    path: ':id',
    component: UserNewComponent,
  }

];

