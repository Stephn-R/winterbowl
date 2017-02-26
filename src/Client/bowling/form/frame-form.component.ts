// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

import { IBowlingFrame } from '../bowling.component';

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
  frame: IBowlingFrame = { FirstRoll: null, SecondRoll: null };
  @Input('currentFrame') frameIndex: number = 0;
  @Output() onSave: EventEmitter<IBowlingFrame> = new EventEmitter<IBowlingFrame>();

  constructor(private toasterService: ToasterService) {
    this.frame = {
      FirstRoll: null,
      SecondRoll: null,
      ThirdRoll: null
    }
  }

  onSubmit($event: Event) {
    $event.preventDefault();

    if(this.frameIndex < 9 && (this.frame.FirstRoll + this.frame.SecondRoll > 10)) {
      this.toasterService.pop('error', 'Bowling Frame Form:', 'Provided values are invalid. You cannot bowl more than 10 pins in two rolls.');
    } else {
      this.onSave.emit(this.frame);
    }

  }
}

// ────────────────────────────────────────────────────────────────────────────────
