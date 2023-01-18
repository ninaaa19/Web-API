import { TestBed } from '@angular/core/testing';

import { ObjektService } from './objekt.service';

describe('ObjektService', () => {
  let service: ObjektService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjektService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
