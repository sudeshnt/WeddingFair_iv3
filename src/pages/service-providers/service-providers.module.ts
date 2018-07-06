import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProvidersPage } from './service-providers';
import { ElasticHeaderModule } from "../../components/elastic-header/elastic-header.module";

@NgModule({
  declarations: [
    ServiceProvidersPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceProvidersPage),
    ElasticHeaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceProvidersPageModule {}
