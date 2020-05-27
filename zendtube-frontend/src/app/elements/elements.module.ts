import { NgModule } from '@angular/core';
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    WidgetAdsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetAdsComponent
  ]
})
export class ElementsModule { }
