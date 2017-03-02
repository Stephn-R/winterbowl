// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { ComponentFixture, fakeAsync, async, tick, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';

import { IBowlingFrame } from '../bowling.component';
import { BowlingFrameFormComponent } from './frame-form.component';
import { AppModule } from '../../config/app.module';

// ────────────────────────────────────────────────────────────────────────────────

describe('<BowlingFrameFormComponent/>', () => {

  let sampleFrame: IBowlingFrame;
  let comp: BowlingFrameFormComponent;
  let fixture: ComponentFixture<BowlingFrameFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] });
    fixture = TestBed.createComponent(BowlingFrameFormComponent);
    comp = fixture.componentInstance;
  });

  it('should exist', () => {
    expect(comp).toBeDefined();
  });

  it('should have a submit method', () => {
    expect(comp.onSubmit).toBeDefined();
  });

  it('should be able to receive a frame to prefill the form with', fakeAsync(() => {
    // Fill the form
    sampleFrame = { FirstRoll: 1, SecondRoll: 2, ThirdRoll: 3 };
    comp.frame = sampleFrame;
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const pass = true;
      fixture.debugElement.queryAll(By.css('.form-control')).forEach((i: DebugElement, idx: number) => {
        expect(i.nativeElement.value).toEqual(String(sampleFrame[Object.keys(sampleFrame)[idx]]));
      });
    });
  }));

  it('should fire a form submit using the output property', fakeAsync(() => {
    sampleFrame = { FirstRoll: 1, SecondRoll: 2, ThirdRoll: 3 };
    comp.frame = sampleFrame;
    comp.onSave = new EventEmitter();
    spyOn(comp.onSave, 'emit');
    comp.onSubmit(new Event(null, null));
    expect(comp.onSave.emit).toHaveBeenCalledWith(sampleFrame);
  }));

});
