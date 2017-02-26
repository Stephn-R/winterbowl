// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { BowlingActions } from './bowling.actions';
import { IBowlingFrame } from './bowling.reducer';
import { Subscription } from 'rxjs';

import { ToasterService } from 'angular2-toaster';

const template = require('./bowling.html');

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// COMPONENT

interface IBowlingState {
  scoreboard: IBowlingFrame[];
}

@Component({
  template,
  styles: [require('./bowling.styles')]
})
export class BowlingComponent implements OnInit {
  activeFrame: number;
  scores: IBowlingFrame[];
  loading: boolean = false;
  subscription: Subscription;

  constructor(private ngRedux: NgRedux<any>, private actions: BowlingActions, private toasterService: ToasterService) {
    this.subscription = ngRedux.select<IBowlingFrame[]>('bowling')
      .subscribe((bowling: any) => { this.scores = bowling.scoreboard; });
    this.activeFrame = 0;
  }

  calculateScore(spliceIndex: number = -1): void {
    const tempBoard: IBowlingFrame[] = (spliceIndex >= 0) ? this.scores.splice(0, spliceIndex) : this.scores;
    this.ngRedux.dispatch(this.actions.computeScore(tempBoard));
  }

  saveFrame(frame: IBowlingFrame): void {
    this.scores[this.activeFrame] = Object.assign({}, frame);
    this.activeFrame = Math.min(9, this.activeFrame+1);
  }

  restartFrames(): void {
    this.activeFrame = 0;
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 3000);
    this.ngRedux.dispatch(this.actions.loadScoreboard());
    this.toasterService.pop('success', 'Bowling Update:', 'Reloading Scoreboard...');
  }

  ngOnInit() {
    this.ngRedux.dispatch(this.actions.loadScoreboard());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

// ────────────────────────────────────────────────────────────────────────────────
