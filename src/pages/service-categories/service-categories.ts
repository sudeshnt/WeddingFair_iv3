import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'service-categories',
  templateUrl: 'service-categories.html',
})
export class ServiceCategoriesPage {

  array:Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0 ; i<10 ; i++){
      this.array.push(i);
    }
  }

  ionViewDidLoad() {}

}
