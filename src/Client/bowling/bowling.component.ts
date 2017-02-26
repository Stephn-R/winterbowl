// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

import { BowlingService } from './bowling.service';

const template = require('./bowling.html');

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// COMPONENT

export interface IBowlingFrame {
  FirstRoll?: number;
  SecondRoll?: number;
  ThirdRoll?: number;
  Score?:number;
}

@Component({
  template,
  styles: [require('./bowling.styles')]
})
export class BowlingComponent implements OnInit {
  totalScore: number;
  activeFrame: number;
  frames: IBowlingFrame[] = [];
  loading: boolean = false;

  constructor(private toasterService: ToasterService, private bowlService: BowlingService) {
    this.frames = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }

  displayValue(frame: IBowlingFrame, idx: number): string|number {
    // Show empties on first load
    if(idx === 1 && frame.FirstRoll === 0) return '';
    if(idx === 2 && frame.SecondRoll === 0) return '';
    if(idx === 3 && frame.ThirdRoll === 0) return '';

    // Determine the character to show
    if(idx < 3) {
      // First / Second Bowl
      if(frame.FirstRoll === 10 && frame.FirstRoll > 0) return (idx === 1 || this.activeFrame === 9) ? 'X' : '';
      else if((frame.FirstRoll + frame.SecondRoll) == 10) return (idx === 1) ? frame.FirstRoll : '/';
      else return idx === 1 ? frame.FirstRoll : frame.SecondRoll;
    } else {
      // Third Bowl
      return (frame.ThirdRoll === 10) ? 'X' : frame.ThirdRoll;
    }
  }

  saveFrame(frame: IBowlingFrame): void {
    this.frames[this.activeFrame] = Object.assign({}, frame);
    this.frames[this.activeFrame].ThirdRoll = this.frames[this.activeFrame].ThirdRoll || 0;
    // Calculate the new score
    this.bowlService.computeScore(this.frames).then((score: number) => {
      this.frames[this.activeFrame].Score = score;
      this.totalScore = score;
      this.activeFrame = Math.min(9, this.activeFrame+1);
    }).catch((err: Error) => {
      this.toasterService.pop('error', 'Bowling Update:', 'There was an issue calculating your bowling score. Please try again!');
    });
  }

  restartFrames(): void {
    this.activeFrame = 0;
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 3000);
    this.__resetFrames();
    this.toasterService.pop('success', 'Bowling Update:', 'Reloading Scoreboard...');
  }

  ngOnInit() {
    this.activeFrame = 0;
    this.__resetFrames();
  }

  private __resetFrames() {
    this.frames.fill({ FirstRoll: 0, SecondRoll: 0, ThirdRoll: 0 });
  }
}

// ────────────────────────────────────────────────────────────────────────────────
