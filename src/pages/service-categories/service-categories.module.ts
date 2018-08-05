import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceCategoriesPage } from './service-categories';
import { CountDown } from 'ng4-date-countdown-timer';

@NgModule({
  declarations: [
    ServiceCategoriesPage,
    CountDown
  ],
  imports: [
    IonicPageModule.forChild(ServiceCategoriesPage),
  ],
})
export class ServiceCategoriesPageModule {}
