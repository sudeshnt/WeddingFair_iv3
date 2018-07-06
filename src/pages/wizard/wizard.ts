import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'wizard',
  templateUrl: 'wizard.html',
})
export class WizardPage {
  @ViewChild('wizardSlider') slider: Slides;
  @Input() events: any;

  next:boolean = true;
  finish:boolean = true

  data:any =  {
    'btnNext': 'Next',
    'btnFinish': 'Finish',
    'items': [
      {
        backgroundImage: 'assets/images/background/21.jpg',
        subtitle: 'Page 1',
        title: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        backgroundImage: 'assets/images/background/22.jpg',
        subtitle: 'Page 2',
        title: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        backgroundImage: 'assets/images/background/23.jpg',
        subtitle: 'Page 3',
        title: 'Lorem ipsum dolor sit amet, consectetur'
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.next = true;
    this.finish = false;
  }

  ionViewDidLoad() {}

  changeSlide(index: number): void {
    if (index > 0) {
      this.slider.slideNext(300);
    } else {
      this.slider.slidePrev(300);
    }
  }

  slideHasChanged(index: number): void {
    try {
      this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
      this.finish = this.slider.isEnd();
    } catch (e) { }
  }

  onEvent(event: string) {
    if (this.events[event]) {
      this.events[event]();
    }
  }

}
