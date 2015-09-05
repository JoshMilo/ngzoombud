/// <reference path="../typings/tsd.d.ts" />

import 'reflect-metadata';
import 'es6-shim';
import 'zone.js';
import 'fetch';
import { FlowerMenu } from './components/flower-menu';

import { Component, View, bootstrap } from 'angular2/angular2';

/**
 * Main Class
 * The Top Level Component
 */
 
 interface IData {
   category?: string;
 }
 
 
@Component({
  selector: 'ngzoombud'
})
@View({
  template: `
    <div class="container">
      <div class="row">
          <div class="col-xs-12">
            <h1>ZoomBud</h1>
            <small>Your personal delivery app</small>
          </div>
      </div>
    <flower-menu></flower-menu> 
    </div>
  `,
  directives: [FlowerMenu]
})
class Main {
  data: any;
  
  constructor() {
    this.data;
    // this.getData();
  }  
    
  getData() {
    // var data: any;
    window.fetch('http://localhost:3000/flowers')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log('parsed json', json)
      this.data = json;
      return this.data;
    })
    .catch(function(ex) {
      throw new Error(`parsing failed: ${ex}`);
    })
  }
  // getData(data: any);
}


bootstrap(Main);

