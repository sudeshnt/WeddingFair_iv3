import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpinnerPage } from './spinner';
import {SpinnerModule} from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    SpinnerPage,
  ],
  imports: [
    IonicPageModule.forChild(SpinnerPage),
    SpinnerModule
  ],
})
export class SpinnerPageModule {}
