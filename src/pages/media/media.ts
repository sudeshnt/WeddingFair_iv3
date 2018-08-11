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

  images = [
    {
      url: 'assets/images/gallery/brogan/16.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/15.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/13.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/7.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/8.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/14.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/20.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/4.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/9.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/10.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/8.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/12.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/2.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/9.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/15.jpg'
    },
    {
      url: 'assets/images/gallery/brogan/0.jpg'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {}

  openGallery(initialSlide) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: initialSlide,
      closeIcon: 'back'
    });
    modal.present();
  }

}
