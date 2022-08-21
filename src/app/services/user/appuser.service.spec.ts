import { TestBed } from '@angular/core/testing';

import { AppUserService } from './appuser.service';

describe('UserService', () => {
  let service: AppUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
