/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bootstrap, NgFor, Inject} from 'angular2/angular2';

@Component({
  selector: 'flower-menu'
})
@View({
  template: `
  <ul id="menu" class="list-group">
    <li class="list-group-item">
      <div class="input-group">
        <div class="input-group-addon text-left"><span class="pull-left">Sour Diesel (Sativa)</span></div>
        <input type="text" class="form-control" type="number" aria-label="Qty" placeholder="Qty">
        <div class="input-group-btn text-right">
          
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          $50 (7g)
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">$50 (7g)</a>
            <a class="dropdown-item" href="#">$95 (14g)</a>
            <a class="dropdown-item" href="#">$185 (28g)</a>
          </div>
        </div>
      </div>
    </li>
  </ul>
  `,
  directives: [NgFor]
})
export class FlowerMenu {
  
  constructor() {
  }
}

// bootstrap(FlowerMenu);
