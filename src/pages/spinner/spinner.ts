import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-spinner',
  templateUrl: 'spinner.html',
})
export class SpinnerPage {
  spinnerItem:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.spinnerItem = "hearts";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpinnerPage');
  }

}
