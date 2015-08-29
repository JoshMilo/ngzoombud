/// <reference path="typings/firebase/firebase.d.ts"/>
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: `
    <div class="row">
      <div class="col-sm-12">
        <h1>Menu</h1>
        <menu></menu>
      </div>
    </div>
    `,
    directives: [NgFor,
      ]
})

// Component controller
class MyAppComponent {
  name: string;
  todos: string[];
  fb: any;
  
  constructor() {
    this.name = 'bob!';
    this.todos = ["walk", "run", "eat", "sleep"];
    // this.fb = new Firebase("https://zoombud.firebaseio.com/concentrates");
  }
  
  getMenu() {
    console.log('hi!');
  }
}

bootstrap(MyAppComponent);