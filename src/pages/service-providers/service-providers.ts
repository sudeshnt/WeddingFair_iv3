import { Component,Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AppConfig, MainConfig } from "../../app/shared/config";
import { VendorService } from "../../app/shared/services/api-data-services";

@IonicPage()
@Component({
  selector: 'page-service-providers',
  templateUrl: 'service-providers.html',
})
export class ServiceProvidersPage {
  AppConfig: any = AppConfig;

  @Input() events: any;

  @ViewChild(Content)
  content: Content;
  active: boolean;
  headerImage: any = "";

  serviceCategory: any = {};
  serviceProviders: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private vendorService: VendorService) {
    if (Object.keys(navParams.data).length > 0) {
      this.serviceCategory = navParams.data;
    } else {
      this.navCtrl.setRoot('ServiceCategoriesPage');
    }

  }

  ionViewDidLoad() {
    if (this.serviceCategory.wedding_category_id) {
      this.initVendors();
    }
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    if (changes.data && changes.data.currentValue) {
      this.headerImage = changes.data.currentValue.headerImage;
    }
    this.subscribeToIonScroll();
  }

  ngAfterViewInit() {
    this.subscribeToIonScroll();
  }

  ngAfterViewChecked() {
    this.subscribeToIonScroll();
  }

  private initVendors() {
    this.vendorService.getVendorListByCategoryId(this.serviceCategory.wedding_category_id).subscribe((response: any) => {
      if (response) {
        this.serviceProviders = response;
      }
    });
  }

  isClassActive() {
    return this.active;
  }

  subscribeToIonScroll() {
    if (this.content != null && this.content.ionScroll != null) {
      this.content.ionScroll.subscribe((d) => {
        if (d.scrollTop < 200 ) {
          this.active = false;
          return;
        }
        this.active = true;
      });
    }
  }

}
