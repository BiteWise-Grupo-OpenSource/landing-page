import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFooter } from './cta-footer';

describe('CtaFooter', () => {
  let component: CtaFooter;
  let fixture: ComponentFixture<CtaFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
