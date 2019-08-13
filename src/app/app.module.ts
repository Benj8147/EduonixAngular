import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ImageComponentComponent } from './image-component/image-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
