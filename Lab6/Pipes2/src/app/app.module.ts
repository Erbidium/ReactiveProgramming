import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormatPipe} from "./format.pipe";
import {FormsModule} from "@angular/forms";
import {JoinPipe} from "./join.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FormatPipe,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
