// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { NgModule } from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BowlingComponent } from './bowling.component';
import { BowlingService } from './bowling.service';
import { BowlingActions } from './bowling.actions';
import { BowlingEpics } from './bowling.epics';

import { BowlingFrameFormComponent } from './form/frame-form.component'

import { ToasterModule } from 'angular2-toaster';

// ────────────────────────────────────────────────────────────────────────────────

@NgModule({
  declarations: [
    BowlingComponent,
    BowlingFrameFormComponent
  ],
  providers: [
    BowlingService,
    BowlingActions,
    BowlingEpics
  ],
  imports: [
    CommonModule,
    FormsModule,
    // 3rd Party
    ToasterModule
  ],
  exports: [ BowlingComponent ],
})
export class BowlingModule {}
