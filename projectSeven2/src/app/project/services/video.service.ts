import { Injectable } from '@angular/core';
import { Video } from './../class/video.class';

@Injectable()
export class VideoService {
  videos: Video[] = [];
  currentVideo: Video;

	constructor() {
    this.createVideo();
  }

	getVideos() : Video[]{
		return this.videos;
  }

	getCurrentVideo() : Video{
		return this.videos[2];
	}

	private createVideo(){
		this.videos.push(new Video('hCoZpTg8kyY', 'Lập trình TypeScript - 01 Giới thiệu khóa học', true));
		this.videos.push(new Video('UcVekGltrbo', 'Lập trình TypeScript - 02 Sử dụng mã nguồn và tài nguyên trong khóa học'));
		this.videos.push(new Video('ZE4SfwRuby4', 'Sử dụng Sublime Text - 01 Download và cài đặt SublimeText'));
		this.videos.push(new Video('vGKYRD9orU4', 'Sử dụng Sublime Text - 02 Cài đặt plugin cho Sublime Text'));
		this.videos.push(new Video('ST_nE4GE_us', 'Sử dụng Sublime Text - 03 Setting Toogle SideBar'));
		this.videos.push(new Video('ac5P59yylT0', 'Sử dụng Sublime Text - 04 Sử dụng Goto'));
		this.videos.push(new Video('LG0STRHzL4', 'Lập trình TypeScript - 03 Hệ thống kiến thức chương 1'));
		this.videos.push(new Video('sDuqdfhtgwU', 'Xây dựng trang demo giỏ hàng với TypeScript - 01 Yêu cầu Project Shopping Cart'));
		this.videos.push(new Video('mysGwkVkxuE', 'Xây dựng trang demo giỏ hàng với TypeScript - 02 Demo Project Shopping', true));
  }
}
