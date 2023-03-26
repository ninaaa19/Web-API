import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WohnungenComponent } from './wohnungen.component';

describe('WohnungenComponent', () => {
  let component: WohnungenComponent;
  let fixture: ComponentFixture<WohnungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WohnungenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WohnungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
