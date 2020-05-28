import { NgModule } from '@angular/core';
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { CommonModule } from '@angular/common';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetMenuTopComponent } from './widget-menu-top/widget-menu-top.component';
import { WidgetMenuMainComponent } from './widget-menu-main/widget-menu-main.component';



@NgModule({
  declarations: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent,
    WidgetMenuTopComponent,
    WidgetMenuMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent,
    WidgetMenuTopComponent,
    WidgetMenuMainComponent
  ]
})
export class ElementsModule { }
