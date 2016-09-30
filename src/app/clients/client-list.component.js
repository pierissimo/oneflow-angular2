import {Component, OnInit} from '@angular/core';
import {BaseList} from '../core/base-list.component';

@Component({
  selector: 'client-list',
  template: require('./client-list.component.html')
})
export class ClientListComponent extends BaseList implements OnInit {
  constructor() {
    super('clients');
  }
}
