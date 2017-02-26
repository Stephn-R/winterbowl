// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Routes, RouterModule } from '@angular/router';

// ────────────────────────────────────────────────────────────────────────────────

import { BowlingComponent } from '../bowling';

// ────────────────────────────────────────────────────────────────────────────────
// ROUTES

const appRoutes: Routes = [
  { path: '', component: BowlingComponent },
];

export const RoutingProviders: any[] = [
  // bootstrap providers
];

export const RoutingModule = RouterModule.forRoot(appRoutes, { useHash: true });

// ────────────────────────────────────────────────────────────────────────────────
