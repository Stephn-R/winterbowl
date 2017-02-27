// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

import { IBowlingFrame } from '../';

const template = require('./frame-form.html');
const styles = [require('./frame-form.styles')];

// ────────────────────────────────────────────────────────────────────────────────
// COMPONENT

/**
 * The Bowling Frame Submission Form
 *
 * @class BowlingFrameFormComponent
 */
@Component({
  template,
  styles,
  selector: 'bowling-frame-form',
})
export class BowlingFrameFormComponent {
  /** inital values for the bowling frame */
  @Input() frame: IBowlingFrame = { FirstRoll: null, SecondRoll: null };
  /** the current frame being edited */
  @Input('currentFrame') frameIndex: number = 0;
  /** the parent function to call on success */
  @Output() onSave: EventEmitter<IBowlingFrame> = new EventEmitter<IBowlingFrame>();

  /**
   * Creates an instance of BowlingFrameFormComponent.
   * @param {ToasterService} toasterService - angular2 notification service
   *
   * @memberOf BowlingFrameFormComponent
   */
  constructor(private toasterService: ToasterService) {
    this.frame = {
      FirstRoll:  null,
      SecondRoll: null,
      ThirdRoll:  null
    }
  }

  /**
   * Submits the frame form if the information is valid
   *
   * @param {Event} $event - the form submition event
   *
   * @memberOf BowlingFrameFormComponent
   */
  onSubmit($event: Event) {
    $event.preventDefault();
    const score = this.frame.FirstRoll + this.frame.SecondRoll;
    // Verify the user does not submit a frame where more than 10 pins were knocked down (excludes final frame)
    if((this.frameIndex < 9 && (score > 10)) || (this.frameIndex === 9 && (score > 10 && score < 20))) {
      this.toasterService.pop('error', 'Bowling Frame Form:', 'Provided values are invalid. You cannot bowl more than 10 pins in two rolls.');
    } else {
      this.onSave.emit(this.frame);
    }

  }
}

// ────────────────────────────────────────────────────────────────────────────────
