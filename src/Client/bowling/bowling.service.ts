// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// ────────────────────────────────────────────────────────────────────────────────

@Injectable()
export class BowlingService {
  constructor(private http: Http) {}
}
