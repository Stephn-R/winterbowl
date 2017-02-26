// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBowlingFrame } from '../bowling.reducer';

const template = require('./frame-form.html');

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// COMPONENT

@Component({
  template,
  selector: 'bowling-frame-form',
  styles: [require('./frame-form.styles')]
})
export class BowlingFrameFormComponent {
  frame: IBowlingFrame = {};
  @Input('currentFrame') frameIndex: number = 0;
  @Output() onSave: EventEmitter<IBowlingFrame> = new EventEmitter<IBowlingFrame>();

  constructor() {
    this.frame = {
      FirstRoll: null,
      SecondRoll: null,
      ThirdRoll: null
    }
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    this.onSave.emit(this.frame);
  }
}

// ────────────────────────────────────────────────────────────────────────────────
