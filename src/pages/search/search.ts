import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @Input() events: any;
  searchTerm: any = "";
  allItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  getItems(event: any): void {

  }

  onEvent(event: string, item: any) {//ITEM [EVENT OR SELECTED ITEM]
    if (this.events[event]) {
      if ('onTextChange' === event) {
        this.getItems(item);
        this.events[event](this.searchTerm);
      } else {
        this.events[event](item);
      }
    }
    console.log(event);
  }

}
