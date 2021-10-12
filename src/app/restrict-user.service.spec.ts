import { TestBed } from '@angular/core/testing';

import { RestrictUserService } from './restrict-user.service';

describe('RestrictUserService', () => {
  let service: RestrictUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestrictUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
