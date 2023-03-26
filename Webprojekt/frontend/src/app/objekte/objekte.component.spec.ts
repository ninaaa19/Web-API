import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjekteComponent } from './objekte.component';

describe('ObjekteComponent', () => {
  let component: ObjekteComponent;
  let fixture: ComponentFixture<ObjekteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjekteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
