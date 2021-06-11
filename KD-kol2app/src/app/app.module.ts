import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from "./services/kd-data.service";
import { OrdersKDComponent } from './orders-kd/orders-kd.component';
import { OrdersItemKDComponent } from './orders-item-kd/orders-item-kd.component';
import { OrdersDetailsKDComponent } from './orders-details-kd/orders-details-kd.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersKDComponent,
    OrdersItemKDComponent,
    OrdersDetailsKDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
