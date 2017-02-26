// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { IBowlingFrame } from './bowling.component';

// ────────────────────────────────────────────────────────────────────────────────

const BASE_URL = '/api';

@Injectable()
export class BowlingService {
  constructor(private http: Http) {}

  computeScore(frames: IBowlingFrame[]) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${BASE_URL}/bowling/score`, { frames }, options)
      .toPromise()
      .then(res => (res.json()));
  }
}
