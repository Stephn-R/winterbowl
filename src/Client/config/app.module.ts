// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApplicationRef, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

import * as createLogger from 'redux-logger';

import { AppComponent }   from './app.component';
import { RoutingModule } from './app.routing';

import {
  BowlingModule
} from './modules.barrel';

import { AppActions } from './app.actions';

// ────────────────────────────────────────────────────────────────────────────────
// APP MODULE

@NgModule({
  bootstrap: [ AppComponent ],

  declarations: [ AppComponent ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    NgReduxModule,
    NgReduxRouterModule,
    // CUSTOM MODULES
    BowlingModule,
  ],

  providers: [ AppActions ],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}

// ────────────────────────────────────────────────────────────────────────────────
