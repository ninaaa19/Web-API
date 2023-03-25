import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauserComponent } from './hauser.component';

describe('HauserComponent', () => {
  let component: HauserComponent;
  let fixture: ComponentFixture<HauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
