// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';

import { IBowlingFrame } from './bowling.reducer';

// ────────────────────────────────────────────────────────────────────────────────

@Injectable()
export class BowlingActions {
  static readonly LOAD_SCOREBOARD = 'LOAD_SCOREBOARD(Bowling)';
  static readonly FETCH_SCORE = 'FETCH_SCORE(Bowling)';
  static readonly FETCH_SCORE_SUCCESS = 'FETCH_SCORE_SUCCESS(Bowling)';
  static readonly FETCH_SCORE_FAILED = 'FETCH_SCORE_FAILED(Bowling)';

  constructor (private ngRedux: NgRedux<any>) {}

  loadScoreboard(): Action {
    return this.ngRedux.dispatch({ type: BowlingActions.LOAD_SCOREBOARD });
  }

  computeScore(scoreboard: IBowlingFrame[]): Action {
    return this.ngRedux.dispatch({ type: BowlingActions.FETCH_SCORE, scoreboard })
  }
}

// ────────────────────────────────────────────────────────────────────────────────
