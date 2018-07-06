import { Component,Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service-providers',
  templateUrl: 'service-providers.html',
})
export class ServiceProvidersPage {
  @Input() events: any;

  @ViewChild(Content)
  content: Content;
  active: boolean;
  headerImage:any = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad(){
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
