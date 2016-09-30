import {RouterModule} from '@angular/router';
import {ClientListComponent} from './client-list.component';
import {ClientEditComponent} from './client-edit.component';

export const routes = [
  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: 'clients/edit',
    component: ClientEditComponent
  }
];

export const ClientsRouting = RouterModule.forRoot(routes);
