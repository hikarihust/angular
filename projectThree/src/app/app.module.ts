import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VariableComponent } from './template-variable/variable.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { TemplateComponent } from './template/template.component';
import { ControlComponent } from './proj-setting-color/control.component';
import { PreviewerComponent } from './proj-setting-color/previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    // VariableComponent,
    // InputComponent,
    // OutputComponent,
    // TemplateComponent,
    ControlComponent,
    PreviewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
