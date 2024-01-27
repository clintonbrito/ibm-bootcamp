import { TestBed } from '@angular/core/testing';

import { StarwarsService } from './starwars.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StarwarsService', () => {
  let service: StarwarsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[ StarwarsService ]
    });
    service = TestBed.inject(StarwarsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
