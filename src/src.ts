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
  menuData: any;
  leaflyData: any;
  leafly: string;
  config: any;
  
  constructor() {
    this.menuData;
    this.leaflyData;
    this.leafly = "http://data.leafly.com/strains/blue-dream";
    this.config = {
      method: 'get',
	    headers: {
        APP_ID: "8ffd1a3f",
			  APP_KEY: "b02174fd310ceb8da0f2989296593e95"
		  }
    }
    // this.getMenuData();
    this.getLeaflyData();
  }  
    
    
  getMenuData() {
    window.fetch('http://localhost:3000/flowers')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log('parsed json', json)
      this.menuData = json;
      return this.data;
    })
    .catch(function(ex) {
      throw new Error(`parsing failed: ${ex}`);
    })
  }
  
  getLeaflyData() {
    window.fetch(this.leafly, this.config)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log('parsed json', json)
      this.leaflyData = json;
      return this.data;
    })
    .catch(function(ex) {
      throw new Error(`parsing failed: ${ex}`);
    })
  }
}


bootstrap(Main);

