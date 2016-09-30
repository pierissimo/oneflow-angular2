import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ClientsRouting} from './clients.routes';
import {ClientListComponent} from './client-list.component';
import {ClientEditComponent} from './client-edit.component';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    FormsModule,
    ClientsRouting,
    ComponentsModule
  ],
  declarations: [
    ClientListComponent,
    ClientEditComponent
  ]
})
export class ClientsModule {
}
