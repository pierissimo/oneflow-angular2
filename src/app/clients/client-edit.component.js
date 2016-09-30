import {Component, OnInit} from '@angular/core';
import {BaseEdit} from '../core/base-edit.component';

@Component({
  selector: 'client-edit',
  template: require('./client-edit.component.html')
})
export class ClientEditComponent extends BaseEdit implements OnInit {
  constructor() {
    super('clients');
  }

  onSubmit() {
    this.save();
  }
}
