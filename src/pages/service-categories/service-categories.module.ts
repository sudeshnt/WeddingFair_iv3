import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceCategoriesPage } from './service-categories';

@NgModule({
  declarations: [
    ServiceCategoriesPage
  ],
  imports: [
    IonicPageModule.forChild(ServiceCategoriesPage),
  ],
})
export class ServiceCategoriesPageModule {}
