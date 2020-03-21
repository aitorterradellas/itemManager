import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import { SearchForm } from '../entities/search-form';
import { Pagination } from '../entities/pagination';

describe('ListService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return filter() value correctly', () => {
    const data = [];
    expect(service.filter(new SearchForm(), "", new Pagination(), data).length).toEqual(data.length);
  });

  it('should return sort() value correctly', () => {
    const data = [];
    expect(service.sort("", data).length).toEqual(data.length);
  });
});
