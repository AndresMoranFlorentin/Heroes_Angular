import { TestBed } from '@angular/core/testing';

import { ComprarComicsService } from './servicio-comics.service';

describe('ComprarComicsService', () => {
  let service: ComprarComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprarComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
