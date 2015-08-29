import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'menu'
})
@View({
  templateUrl: 'components/menu/menu.html'
})

export default class Menu {
  name: string;
  todos: string[];
  fb: any;
  
  constructor() {
    
  }
}

bootstrap(Menu);
