import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObjektComponent } from './create-objekt.component';

describe('CreateObjektComponent', () => {
  let component: CreateObjektComponent;
  let fixture: ComponentFixture<CreateObjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateObjektComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateObjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
