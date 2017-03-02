// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BowlingComponent } from './bowling.component';
import { AppModule } from '../config/app.module';

// ────────────────────────────────────────────────────────────────────────────────

describe('<BowlingComponent/>', () => {

  let comp:    BowlingComponent;
  let fixture: ComponentFixture<BowlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] });
    fixture = TestBed.createComponent(BowlingComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(comp).toBeDefined();
  });

  it('should be able to begin a bowling game with 10 frames', () => {
    expect(comp.frames.length).toEqual(10);
  });

  it('should start on frame zero', () => {
    expect(comp.activeFrame).toEqual(0);
  });

  it('should know when to display a strike symbol', () => {
    expect(comp.displayValue({
      FirstRoll: 10,
      SecondRoll: 0
    }, 1)).toEqual('X');
  });

  it('should know when to display a spare symbol', () => {
    expect(comp.displayValue({
      FirstRoll: 8,
      SecondRoll: 2
    }, 2)).toEqual('/');
  });

  it('should known when to display a score', () => {
    expect(comp.displayValue({
      FirstRoll: 6,
      SecondRoll: 2
    }, 1)).toEqual(6);
  });

  it('should known how to display the score for a frame', () => {
    // We are just testing it is able to fetch the score
    expect(comp.displayScore({
      FirstRoll: 3,
      SecondRoll: 6,
      Score: 20
    }, 1)).toEqual(20);
  });

});
