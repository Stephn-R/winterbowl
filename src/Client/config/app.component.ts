// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component } from '@angular/core';

const template = require('./app.html');
const styles = [require('./app.styles')];

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// APP COMPONENT

@Component({
  selector: 'app',
  template,
  styles
})
export class AppComponent {}

// ────────────────────────────────────────────────────────────────────────────────
