/// <reference path="../typings/tsd.d.ts" />

import 'reflect-metadata';
import 'es6-shim';
import 'zone.js';
import 'fetch';
import { Menu } from './components/menu';

import { Component, View, bootstrap } from 'angular2/angular2';

/**
 * TestApp Class
 * 
 */
@Component({
  selector: 'ngzoombud'
})
@View({
  template: `
    <h1>ZoomBud</h1>
    <small>Your personal delivery app</small>
    <menu></menu>
  `,
  directives: [Menu]
})
class Main {
  name: string;
  checkStatus: any;
  parseJSON: any;
  
  constructor() {
    this.name = 'Angular2';
    // this.getData();
  }
    
  // getData() {
  //     window.fetch('http://localhost:3000/flowers')
  //   .then(function(response) {
  //     return response.json()
  //   }).then(function(json) {
  //     console.log('parsed json', json)
  //   }).catch(function(ex) {
  //     console.log('parsing failed', ex)
  //   })
  // }
}


bootstrap(Main);

