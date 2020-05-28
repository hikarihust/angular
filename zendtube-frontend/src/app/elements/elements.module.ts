import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Widget
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetMenuTopComponent } from './widget-menu-top/widget-menu-top.component';
import { WidgetMenuMainComponent } from './widget-menu-main/widget-menu-main.component';

// Element
import { ElmHeaderComponent } from './elm-header/elm-header.component';

@NgModule({
  declarations: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent,
    WidgetMenuTopComponent,
    WidgetMenuMainComponent,
    ElmHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent,
    WidgetMenuTopComponent,
    WidgetMenuMainComponent,
    ElmHeaderComponent
  ]
})
export class ElementsModule { }
