import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  array:Array<any> = [];

  constructor(public navCtrl: NavController){
    for(let i=0 ; i<10 ; i++){
      this.array.push(i);
    }
  }

}
