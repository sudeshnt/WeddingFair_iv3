import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainConfig } from '../../app/shared/config/main-config';
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
    
  }

  ionViewDidLoad() {
    this.initServiceCategories();
  }

  private initServiceCategories() {
    this.categoryService.getApprovedServiceCategories().subscribe((response: any) => {
      if (response) {
        this.categories = response;
        console.log(this.categories);
      }
    });
  }

}
