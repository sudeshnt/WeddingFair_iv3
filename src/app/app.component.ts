import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  menuList:Array<any> = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.menuList = [
      {"name" : 'Login', "page" : 'LoginPage'},
      {"name" : 'Register', "page" : 'RegisterPage'},
      {"name" : 'Service Categories', "page" : 'ServiceCategoriesPage'},
      {"name" : 'Service Providers', "page" : 'ServiceProvidersPage'},
      {"name" : 'Service Provider', "page" : 'ServiceProviderPage'},
      {"name" : 'Favourites', "page" : 'FavouritesPage'},
      {"name" : 'Media', "page" : 'MediaPage'},
      {"name" : 'Search', "page" : 'SearchPage'},
      {"name" : 'Spinner', "page" : 'SpinnerPage'},
      {"name" : 'Splash', "page" : 'SplashPage'},
      {"name" : 'Wizard', "page" : 'WizardPage'}
    ];

  }

  ionViewDidLoad() {

  }

  openPage(page){
    this.nav.setRoot(page);
  }
}

