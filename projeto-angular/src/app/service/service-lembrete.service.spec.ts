import { TestBed } from '@angular/core/testing';

import { ServiceLembreteService } from './service-lembrete.service';

describe('ServiceLembreteService', () => {
  let service: ServiceLembreteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLembreteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
