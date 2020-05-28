import { NgModule } from '@angular/core';
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { CommonModule } from '@angular/common';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';



@NgModule({
  declarations: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent
  ]
})
export class ElementsModule { }
