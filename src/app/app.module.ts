import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {WeatherComponent} from "./weather/weather.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {Assignment1Component} from "./assigment1/assignment1.component";
import {Assignment2Component} from "./assignment2/assignment2.component";

const appRouters: Routes = [
  {
    path:'lop-hoc', component: ClassroomComponent
  },
  {
    path:'san-pham', component: ProductsComponent
  },
  {
    path:'thoi-tiet', component: WeatherComponent
  }


]
@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent,
    StudentComponent,
    ProductComponent,
    ProductsComponent,
    WeatherComponent,
    Assignment1Component,
    Assignment2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
