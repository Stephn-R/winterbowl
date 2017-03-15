// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IBowlingFrame } from './bowling.component';

// ────────────────────────────────────────────────────────────────────────────────

const BASE_URL = '/api/bowling';
const ENDPOINT_FETCH_SCORE = `${BASE_URL}/score`;

/**
 * The Bowling Angular Service
 *
 * @export
 * @class BowlingService
 * @implements {OnInit}
 */
@Injectable()
export class BowlingService implements OnInit {
  /** general JSON http headers */
  private JSON_OPTIONS: RequestOptions;

  /**
   * Creates an instance of BowlingService.
   * @param {Http} http - angular2 http service provider
   *
   * @memberOf BowlingService
   */
  constructor(private http: Http) {}

  /**
   * Executes an HTTP call to calculate the bowling score from the frames
   *
   * @param {IBowlingFrame[]} frames - the frames to calculate a score from
   * @returns {Promise<number>}
   *
   * @memberOf BowlingService
   */
  computeScore(frames: IBowlingFrame[]): Promise<number> {
    return this.http.post(ENDPOINT_FETCH_SCORE, { frames }, this.JSON_OPTIONS)
      .toPromise()
      .then(res => (res.json()));
  }

  /**
   * Prepares the Bowling Service Provider
   *
   * @memberOf BowlingService
   */
  ngOnInit(): void {
    // Build the basic headers to use
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.JSON_OPTIONS = new RequestOptions({ headers: headers });
  }
}
