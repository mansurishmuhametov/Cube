import { TestBed, inject } from '@angular/core/testing';

import { AutoCenterService } from './auto-center.service';

describe('AutoCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoCenterService]
    });
  });

  it('should be created', inject([AutoCenterService], (service: AutoCenterService) => {
    expect(service).toBeTruthy();
  }));
});
