// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Routes, RouterModule } from '@angular/router';
import { BowlingComponent } from '../bowling';

// ────────────────────────────────────────────────────────────────────────────────
// ROUTES

const appRoutes: Routes = [
  { path: '', component: BowlingComponent },
  { path: '**', redirectTo: '' }
];

export const RoutingModule = RouterModule.forRoot(appRoutes, { useHash: true });

// ────────────────────────────────────────────────────────────────────────────────
