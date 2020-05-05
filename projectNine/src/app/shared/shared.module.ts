import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizePipe,
    HighlightDirective
  ],
  exports: [
		CapitalizePipe,
		HighlightDirective,
		CommonModule
  ]
})
export class SharedModule  { }
