import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { GlobalData, GlobalFunctions, LocalDataService, UserService, HttpService,
  CategoryMap, CommonMapService,
  CategoryService, VendorService } from "./shared";

const SERVICES = [
  GlobalData,
  GlobalFunctions,
  UserService,
  HttpService,
  LocalDataService
];

const MAPPING_SERVICES = [
  CategoryMap,
  CommonMapService
];

const API_DATA_SERVICES = [
  CategoryService,
  VendorService
];

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ionicGalleryModal.GalleryModalModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Geolocation,
    ...SERVICES,
    ...API_DATA_SERVICES,
    ...MAPPING_SERVICES,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    }
  ]
})
export class AppModule {}
