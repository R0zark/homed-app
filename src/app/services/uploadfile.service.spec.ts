import { TestBed } from '@angular/core/testing';

import { fileService } from './fileService.service';

describe('UploadfileService', () => {
  let service: fileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
