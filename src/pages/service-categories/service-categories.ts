import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainConfig } from "../../app/shared/config/main-config";
import { CategoryService } from "../../app/shared/services/api-data-services";
import { AppConfig } from "../../app/shared/config";

@IonicPage()
@Component({
  selector: 'service-categories',
  templateUrl: 'service-categories.html',
})
export class ServiceCategoriesPage {
  AppConfig: any = AppConfig;

  categories:Array<any> = [];
  array:Array<any> = [];
  text:any = {
    Days: "Days",
    Hours: "Hrs.",
    Minutes: "Min.",
    Seconds: "Sec.",
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryService: CategoryService) {
    for(let i=0 ; i<10 ; i++){
      this.array.push(i);
    }
    this.categories = MainConfig.categoryList;
    console.log(this.categories);
  }

  ionViewDidLoad() {
    this.initServiceCategories();
  }

  private initServiceCategories() {
    this.categoryService.getApprovedServiceCategories().then((response: any) => {
      console.log(response);
      this.categories = response.data;
    })
  }

}
