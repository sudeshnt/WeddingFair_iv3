import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainConfig } from "../../app/shared/config/main-config";

@IonicPage()
@Component({
  selector: 'service-categories',
  templateUrl: 'service-categories.html',
})
export class ServiceCategoriesPage {
  categories:Array<any> = [];
  array:Array<any> = [];
  text:any = {
    Days: "Days",
    Hours: "Hrs.",
    Minutes: "Min.",
    Seconds: "Sec.",
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0 ; i<10 ; i++){
      this.array.push(i);
    }
    this.categories = MainConfig.categoryList;
    console.log(this.categories);
  }

  ionViewDidLoad() {}

}
