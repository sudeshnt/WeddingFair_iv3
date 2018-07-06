import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  @Input('events') events: any;
  timer:any;
  data:any ={
    "duration": 10000,
    "backgroundImage": 'assets/images/splashscreen/1.jpg',
    "logo": 'assets/images/logo/4.png',
    "title": "Welcome to our new iOS 11 theme"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  ngOnChanges(changes: {[propKey: string]: any}) {
    clearInterval(this.timer);
    this.executeEvents();
  }

  getEvents(): any {
    return this.events;
  }

  executeEvents() : void {
    let duration = (this.data && this.data.duration) ? this.data.duration : 10000;
    var events = null;

    if (this.getEvents()) {
      events = this.getEvents()['onRedirect'];
    }

    this.timer = setTimeout(function(){
      if (events) {
        events();
      }
    }, duration);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
