import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ServiceProviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-provider',
  templateUrl: 'service-provider.html',
})
export class ServiceProviderPage {
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage:any = "";

  data : any = {
    headerTitle: 'GMAPS + Location  Details',
    title: 'Museum of Modern Art',
    reviews: '4.12 (78 reviews)',
    contentTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    contentDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!',
    icon: 'checkmark-circle',
    location: 'Design street, New York, USA',
    time: '8:00 to 16:00 working days',
    phone: '33 222 11',
    webSite: 'www.csform.com',
    email: 'dev@csform.com',
    iconsStars: [{
      "iconActive": "icon-star",
      "iconInactive": "icon-star-outline",
      "isActive": true
    }, {
      "iconActive": "icon-star",
      "iconInactive": "icon-star-outline",
      "isActive": true
    }, {
      "iconActive": "icon-star",
      "iconInactive": "icon-star-outline",
      "isActive": true
    }, {
      "iconActive": "icon-star",
      "iconInactive": "icon-star-outline",
      "isActive": true
    }, {
      "iconActive": "icon-star",
      "iconInactive": "icon-star-outline",
      "isActive": false
    }],
    map: {
      lat: 40.712562,
      lng: -74.005911,
      zoom: 15,
      mapTypeControl: true,
      streetViewControl: true,
    }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceProviderPage');
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
