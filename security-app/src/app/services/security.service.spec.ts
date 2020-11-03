import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  let service: SecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
