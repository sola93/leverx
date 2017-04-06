import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import {ListComponent} from "./list/list.component";
import {AsteroidService} from "./asteroid.service";
import {AsteroidComponent} from "./asteroid/asteroid.component";
import {NotFoundComponent} from "./404/404.component";



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AsteroidComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2SmartTableModule,
  ],
  providers: [AsteroidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
