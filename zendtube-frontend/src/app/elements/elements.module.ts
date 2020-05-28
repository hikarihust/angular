import { NgModule } from '@angular/core';
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { CommonModule } from '@angular/common';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';



@NgModule({
  declarations: [
    WidgetAdsComponent,
    WidgetBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetAdsComponent,
    WidgetBannerComponent
  ]
})
export class ElementsModule { }
