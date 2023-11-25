import { TestBed } from '@angular/core/testing';

import { UbicacionService } from './ubicacion.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UbicacionService', () => {
  let service: UbicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[UbicacionService,HttpClient,HttpHandler]});
    service = TestBed.inject(UbicacionService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
