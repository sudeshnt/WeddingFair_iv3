import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainConfig } from "../../app/shared/config/main-config";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  register_type: any = 'customer';
  categories:Array<any> = [];
  user:any = {};
  vendor:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories = MainConfig.categoryList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
