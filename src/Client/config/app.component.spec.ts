// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

// ────────────────────────────────────────────────────────────────────────────────

describe('<App/>', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ AppModule ] });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should exist', () => {
    expect(comp).toBeDefined();
  });

});
