/// <reference path="../../typings/tsd.d.ts" />

// import 'reflect-metadata';
// import 'es6-shim';
// import 'zone.js';
// import 'fetch';

// import { Component, View, bootstrap } from 'angular2/angular2';


export class MenuService {
  names: string[];
  
  constructor() {
    this.names = ['bob', 'phil'];
  }
}