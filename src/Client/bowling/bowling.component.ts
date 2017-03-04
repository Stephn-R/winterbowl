// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { BowlingService } from './bowling.service';

const template = require('./bowling.html');
const styles = [require('./bowling.styles.scss')];

// ────────────────────────────────────────────────────────────────────────────────
// COMPONENT

export interface IBowlingFrame {
  FirstRoll?: number;
  SecondRoll?: number;
  ThirdRoll?: number;
  Score?:number;
}

/**
 * The Bowling Scorecard Component
 *
 * @export
 * @class BowlingComponent
 * @implements {OnInit}
 */
@Component({
  template,
  styles
})
export class BowlingComponent implements OnInit {
  /** the current frame being edited */
  activeFrame: number;
  /** the frame form properties */
  frameForm: IBowlingFrame = {};
  /** the bowling scorecard by frames */
  frames: IBowlingFrame[] = [];
  /** the flag determining the app loading state */
  loading: boolean = false;

  /**
   * Creates an instance of BowlingComponent.
   * @param {ToasterService} toasterService - angular2 notification service
   * @param {BowlingService} bowlService - bowling API service provider
   *
   * @memberOf BowlingComponent
   */
  constructor(private toasterService: ToasterService, private bowlService: BowlingService) {
    // Start an empty scorecard to be filled
    this.frames = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }

  /**
   * Initializes the scorecard and bowling form
   *
   * @memberOf BowlingComponent
   */
  ngOnInit(): void {
    this.activeFrame = 0;
    this.__resetForm();
    this.__resetFrames();
  }

  /**
   * Determines what character is to be displayed on the scorecard for the frame
   *
   * @param {IBowlingFrame} frame - the bowling frame object
   * @param {number} idx - which ball roll to determine the display value of
   * @returns {(string|number)} - the string to be displayed on the screen
   *
   * @memberOf BowlingComponent
   */
  displayValue(frame: IBowlingFrame, idx: number): string|number {
    // Show empties on first load
    if((idx === 1 && frame.FirstRoll === 0) ||
      (idx === 2 && frame.SecondRoll === 0) ||
      (idx === 3 && frame.ThirdRoll === 0)) return '';

    // Show X on final frame if second roll was a strike
    if((idx === 2 && frame.SecondRoll === 10 && this.activeFrame === 9)) return 'X';

    // Determine the character to show (FIRST or SECOND)
    if(idx < 3) {
      // FIRST BOWL : Display a STRIKE character
      if((frame.FirstRoll === 10 && idx === 1) || (frame.SecondRoll === 10 && this.activeFrame >= 9 && idx === 2)) return 'X';
      // SECOND BOWL : Display an empty character if a strike occured
      else if((frame.FirstRoll === 10 && this.activeFrame < 9 && idx === 2)) return '';
      // SECOND BOWL : Display a SPARE character
      else if((frame.FirstRoll + frame.SecondRoll) == 10) return (idx === 1) ? frame.FirstRoll : '/';
      // OTHERWISE: Show how many pins were hit
      else return idx === 1 ? frame.FirstRoll : frame.SecondRoll;
    } else {
      // THIRD BOWL (Can't have a spare on final frame)
      return (frame.ThirdRoll === 10) ? 'X' : frame.ThirdRoll;
    }
  }

  /**
   * Displays the current score if not pending
   *
   * @param {IBowlingFrame} frame - the bowling frame object
   * @returns {string} - the score to be displayed
   *
   * @memberOf BowlingComponent
   */
  displayScore(frame: IBowlingFrame, idx: number): string|number {
    return (this.activeFrame-1 == idx && (frame.FirstRoll === 10 || frame.FirstRoll + frame.SecondRoll === 10) && this.activeFrame < 9) ? '' : frame.Score;
  }

  /**
   * Saves the bowling frame form to the active frame being edited
   *
   * @param {IBowlingFrame} frame - the frame object to display on the scorecard
   *
   * @memberOf BowlingComponent
   */
  saveFrame(frame: IBowlingFrame): void {
    // Save if there are more empty frames
    if(this.activeFrame <= 9) {
      this.frames[this.activeFrame] = Object.assign({}, frame);
      this.frames[this.activeFrame].ThirdRoll = this.frames[this.activeFrame].ThirdRoll || 0;
      // Calculate the new score
      this.bowlService.computeScore(this.frames).then((score: number) => {
        this.frames[this.activeFrame].Score = score;
        this.activeFrame = Math.min(10, this.activeFrame+1);
      }).catch((err: Error) => {
        this.toasterService.pop('error', 'Bowling Update:', 'There was an issue calculating your bowling score. Please try again!');
      });
    } else {
      // No more empty frames to save
      this.toasterService.pop('warning', 'Bowling Update:', 'There are no more frames left. Please start a new game!');
    }
  }

  /**
   * Restarts the bowling scorecard and zeroes out the bowling form
   *
   * @memberOf BowlingComponent
   */
  restartFrames(): void {
    this.__resetForm();
    this.__resetFrames();
    this.activeFrame = 0;
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 3000);
    this.toasterService.pop('success', 'Bowling Update:', 'Reloaded Scorecard successfully!');
  }

  /**
   * Resets the bowling form fields
   *
   * @private
   *
   * @memberOf BowlingComponent
   */
  private __resetForm() {
    this.frameForm = { FirstRoll: null, SecondRoll: null, ThirdRoll: null };
  }

  /**
   * Resets the bowling scorecard frames
   *
   * @private
   *
   * @memberOf BowlingComponent
   */
  private __resetFrames() {
    this.frames.fill({ FirstRoll: 0, SecondRoll: 0, ThirdRoll: 0 });
  }
}

// ────────────────────────────────────────────────────────────────────────────────
