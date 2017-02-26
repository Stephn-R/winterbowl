// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BowlingActions } from './bowling.actions';

import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

// ────────────────────────────────────────────────────────────────────────────────

const BASE_URL = '/api';

@Injectable()
export class BowlingEpics {
  constructor(private http: Http) {}

  score = (action$: ActionsObservable<any>) => {
    return action$.ofType(BowlingActions.FETCH_SCORE)
    .mergeMap(({payload}) => {
      return this.http.post(`${BASE_URL}/bowling/score`, payload)
      .map(result => ({
        type: BowlingActions.FETCH_SCORE_SUCCESS,
        payload: result.json()
      }))
      .catch(error => Observable.of({ type: BowlingActions.FETCH_SCORE_FAILED }));
    });
  }
}
