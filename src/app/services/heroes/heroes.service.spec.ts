import { TestBed, inject } from '@angular/core/testing';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService]
    });
  });

  it('should ...', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));
});
