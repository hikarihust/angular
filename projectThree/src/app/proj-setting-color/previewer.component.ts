import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-previewer',
	templateUrl: './previewer.component.html'
})

export class PreviewerComponent {
  componentTitle: string = "PreviewerComponent";
  @Input("color") previewerColor: string;
	constructor() {}
}




