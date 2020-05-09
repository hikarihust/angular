import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		NavbarComponent,
	],
	exports: [
		NavbarComponent,
		CommonModule
	]
})

export class ElementsModule { }


