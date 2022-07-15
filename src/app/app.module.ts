import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService), HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
