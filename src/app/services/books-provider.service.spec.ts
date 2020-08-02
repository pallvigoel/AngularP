import { TestBed } from '@angular/core/testing';

import { BooksProviderService } from './books-provider.service';

describe('BooksProviderService', () => {
  let service: BooksProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
