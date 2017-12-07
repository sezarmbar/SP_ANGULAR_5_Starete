import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {UIRouterModule} from "@uirouter/angular";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  template: `
  <a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  
  <ui-view></ui-view>
  `
})
export class AppComponent { }

@Component({  
  template: '<h3>Hello world!</h3>' 
})
export class Hello { }

@Component({ 
  template: '<h3>Its the UI-Router hello world app!</h3>' 
})
export class About { }

