import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {LeftMenuComponent} from './LeftMenu';
import {TopBarComponent} from './TopBar';
import {HboxWrapperComponent} from './HboxWrapper';
import {WrapperComponent} from './Wrapper';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LeftMenuComponent,
    TopBarComponent,
    HboxWrapperComponent,
    WrapperComponent
  ],
  declarations: [
    LeftMenuComponent,
    TopBarComponent,
    HboxWrapperComponent,
    WrapperComponent
  ]
})
export class ComponentsModule {
}
