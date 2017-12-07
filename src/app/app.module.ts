import { About, AppComponent, Hello } from './app.component';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import {UIRouterModule, UIView} from '@uirouter/angular';

import { APP_STATES } from './States';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { routerConfigFn } from './router.config';
import { UmfrageComponent } from './umfrage/umfrage.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello, About, HomeComponent, UmfrageComponent 
  ],
  imports: [
    UIRouterModule.forRoot({ states: APP_STATES, useHash: true })
    ,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
