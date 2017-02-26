// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { NgModule } from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BowlingComponent } from './bowling.component';
import { BowlingFrameFormComponent } from './form/frame-form.component'
import { BowlingService } from './bowling.service';

import { ToasterModule } from 'angular2-toaster';

// ────────────────────────────────────────────────────────────────────────────────

@NgModule({
  declarations: [
    BowlingComponent,
    BowlingFrameFormComponent
  ],
  providers: [
    BowlingService
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
