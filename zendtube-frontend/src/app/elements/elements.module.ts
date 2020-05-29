import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Widget
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetMenuTopComponent } from './widget-menu-top/widget-menu-top.component';
import { WidgetMenuMainComponent } from './widget-menu-main/widget-menu-main.component';

import { WidgetPlaylistComponent } from './widget-playlist/widget-playlist.component';
import { WidgetFeaturedVideoComponent } from './widget-featured-video/widget-featured-video.component';
import { WidgetPopularVideoComponent } from './widget-popular-video/widget-popular-video.component';
import { WidgetContactComponent } from './widget-contact/widget-contact.component';
import { WidgetFacebookComponent } from './widget-facebook/widget-facebook.component';

// Element
import { ElmHeaderComponent } from './elm-header/elm-header.component';

@NgModule({
  declarations: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent,
    WidgetMenuTopComponent,
    WidgetMenuMainComponent,
    WidgetPlaylistComponent,
    WidgetFeaturedVideoComponent,
    WidgetPopularVideoComponent,
    WidgetContactComponent,
    WidgetFacebookComponent,

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
    WidgetPlaylistComponent,
    WidgetFeaturedVideoComponent,
    WidgetPopularVideoComponent,
    WidgetContactComponent,
    WidgetFacebookComponent,

    ElmHeaderComponent
  ]
})
export class ElementsModule { }
