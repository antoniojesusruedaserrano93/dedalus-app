import { TestBed } from '@angular/core/testing';

import { TransformPatientService } from './transform-patient.service';

describe('TransformPatientService', () => {
  let service: TransformPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
