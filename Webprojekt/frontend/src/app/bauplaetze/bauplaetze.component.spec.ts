import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BauplaetzeComponent } from './bauplaetze.component';

describe('BauplaetzeComponent', () => {
  let component: BauplaetzeComponent;
  let fixture: ComponentFixture<BauplaetzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BauplaetzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BauplaetzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
