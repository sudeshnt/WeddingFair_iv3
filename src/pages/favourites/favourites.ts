import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  data:any = {
    header: "Following",
    items: [
      {
        id: 1,
        title: 'Grant Marshall',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/17.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 2,
        title: 'Pena Valdez',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/18.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 3,
        title: 'Jessica Miles',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/19.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 4,
        title: 'Kerri Barber',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/20.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 5,
        title: 'Natasha Gamble',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/21.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 6,
        title: 'White Castaneda',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/22.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 7,
        title: 'Vanessa Ryan',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/11.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 8,
        title: 'Carol Kelly',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/17.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      },
      {
        id: 9,
        title: 'Barrera Ramsey',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/avatar/18.jpg',
        ionBadge: 'follow',
        delate: 'Delete'
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  undo = (slidingItem: ItemSliding) => {
    slidingItem.close();
  }

  delete = (item: any): void => {
    let index = this.data.items.indexOf(item);
    if (index > -1) {
      this.data.items.splice(index, 1);
    }
  }

}
