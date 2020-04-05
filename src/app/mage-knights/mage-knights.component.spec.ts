import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MageKnightsComponent } from './mage-knights.component';

describe('MageKnightsComponent', () => {
  let component: MageKnightsComponent;
  let fixture: ComponentFixture<MageKnightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MageKnightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MageKnightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
