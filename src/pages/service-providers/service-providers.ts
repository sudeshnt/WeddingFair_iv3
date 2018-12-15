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

    if (Object.keys(this.navParams.data).length > 0) {
      this.serviceCategory = this.navParams.data;
    } else {
      this.navCtrl.setRoot('ServiceCategoriesPage');
    }

  }

  ionViewDidLoad() {
    if (this.serviceCategory.categoryId) {
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
    const req = {
      offset: 0,
      limit: 10,
      searchKeys : [
        'categoryId'
      ],
      operators : [
        '='
      ],
      values : [
        this.serviceCategory.categoryId
      ],
      statuses: [
        MainConfig.statusList.APPROVED
      ]

    };
    this.vendorService.getVendorListByCategoryId(req).subscribe((response: any) => {
      if (response) {
        this.serviceProviders = response.data;
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
