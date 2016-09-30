import {Component, OnInit} from '@angular/core';
import {BaseEdit} from '../core/base-edit.component';
import {default as _} from 'lodash';

@Component({
  selector: 'client-edit',
  template: require('./client-edit.component.html'),
  styles: _.map([require('./client-edit.component.scss')], String)
})
export class ClientEditComponent extends BaseEdit implements OnInit {
  constructor() {
    super('clients');
  }

  onSubmit() {
    this.save();
  }
}
