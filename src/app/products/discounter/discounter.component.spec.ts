import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscounterComponent } from './discounter.component';

describe('DiscounterComponent', () => {
  let component: DiscounterComponent;
  let fixture: ComponentFixture<DiscounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
