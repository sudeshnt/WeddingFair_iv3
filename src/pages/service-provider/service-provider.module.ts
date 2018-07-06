import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProviderPage } from './service-provider';
import { AgmCoreModule } from '@agm/core';
import { AppSettings } from "../../app/services/app-settings";
import { ElasticHeaderModule } from "../../components/elastic-header/elastic-header.module";

@NgModule({
  declarations: [
    ServiceProviderPage,
  ],
  imports: [
    AgmCoreModule.forRoot(AppSettings.MAP_KEY),
    IonicPageModule.forChild(ServiceProviderPage),
    ElasticHeaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceProviderPageModule {}
