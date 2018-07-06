import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MediaPage } from './media';

@NgModule({
  declarations: [
    MediaPage,
  ],
  imports: [
    IonicPageModule.forChild(MediaPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MediaPageModule {}
