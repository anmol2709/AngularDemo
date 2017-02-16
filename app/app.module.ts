import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import { AppComponent }  from './app.component';
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  imports:      [ BrowserModule , FormsModule ,RouterModule.forRoot(routes),CommonModule],
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
