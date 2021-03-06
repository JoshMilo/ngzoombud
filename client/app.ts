/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Parties} from 'collections/parties';
import {bootstrap} from 'angular2-meteor';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.ng.html',
    directives: [NgFor]
})
class Socially {
    parties: Mongo.Cursor;

    constructor () {
        this.parties = Parties.find();
    }
}

bootstrap(Socially);