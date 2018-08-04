import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@IonicPage()
@Component({
  selector: 'media',
  templateUrl: 'media.html',
})
export class MediaPage {
  data:any = {
    items: [
      {
        id: 1,
        image: 'assets/images/gallery/brogan/16.jpg'
      },
      {
        id: 2,
        image: 'assets/images/gallery/brogan/15.jpg'
      },
      {
        id: 3,
        image: 'assets/images/gallery/brogan/13.jpg'
      },
      {
        id: 4,
        image: 'assets/images/gallery/brogan/7.jpg'
      },
      {
        id: 5,
        image: 'assets/images/gallery/brogan/8.jpg'
      },
      {
        id: 6,
        image: 'assets/images/gallery/brogan/14.jpg'
      },
      {
        id: 7,
        image: 'assets/images/gallery/brogan/20.jpg'
      },
      {
        id: 8,
        image: 'assets/images/gallery/brogan/4.jpg'
      },
      {
        id: 9,
        image: 'assets/images/gallery/brogan/9.jpg'
      },
      {
        id: 10,
        image: 'assets/images/gallery/brogan/10.jpg'
      },
      {
        id: 11,
        image: 'assets/images/gallery/brogan/8.jpg'
      },
      {
        id: 12,
        image: 'assets/images/gallery/brogan/12.jpg'
      },
      {
        id: 13,
        image: 'assets/images/gallery/brogan/2.jpg'
      },
      {
        id: 14,
        image: 'assets/images/gallery/brogan/9.jpg'
      },
      {
        id: 15,
        image: 'assets/images/gallery/brogan/15.jpg'
      },
      {
        id: 16,
        image: 'assets/images/gallery/brogan/0.jpg'
      }
    ]
  };

  images = [{
    url: `assets/images/gallery/brogan/0.jpg`
  },{
    url: `assets/images/gallery/brogan/0.jpg`
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {}

  openImageSlider = (group: any, index: number): any => {
    // this.navCtrl.push(group.fullscreen, {
    //   'group': group.items,
    //   'index': index
    // });
  }

  openGallery() {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: 0,
      closeIcon: 'back'
    });
    modal.present();
  }

}
