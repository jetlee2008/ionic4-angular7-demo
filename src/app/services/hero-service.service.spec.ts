import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero-service.service';

describe('HeroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
