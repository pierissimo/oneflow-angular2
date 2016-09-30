import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './app.routes';
import {store} from './core/reducers';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './containers/App';
import {ClientsModule} from './clients/clients.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    routing,
    store,
    ClientsModule,
    ComponentsModule
  ],
  declarations: [
    RootComponent,
    AppComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
