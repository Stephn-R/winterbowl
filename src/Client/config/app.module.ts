// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApplicationRef, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import * as createLogger from 'redux-logger';

import { AppComponent }   from './app.component';
import { RoutingModule } from './app.routing';

import {
  BowlingModule
} from './modules.barrel';

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
    // CUSTOM MODULES
    BowlingModule,
  ],

  providers: [],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}

// ────────────────────────────────────────────────────────────────────────────────
