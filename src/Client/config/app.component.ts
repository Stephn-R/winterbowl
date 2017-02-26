// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, ViewEncapsulation } from '@angular/core';

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// APP COMPONENT

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.styles')]
})
export class AppComponent {
  constructor() {}
}

/*=====  End of APP COMPONENT  ======*/
