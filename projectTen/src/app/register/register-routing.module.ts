import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { FormRegisterComponent } from './components/form-register.component';

const configRoute: Routes = [
 	{ path: 'register', component: FormRegisterComponent }
];


@NgModule({
	imports: [
		RouterModule.forChild(configRoute)
	],
	exports: [
		RouterModule
	]
})
export class RegisterRoutingModule {}
