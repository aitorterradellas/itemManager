import { TestBed } from '@angular/core/testing';

import { FavouriteService } from './favourite.service';
import { Item } from '../entities/item';

describe('FavouriteService', () => {
  let service: FavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return isSelected() value correctly and apply toggle() actions correctly', () => {
    const item = new Item();
    expect(service.isSelected(item)).toBeFalsy();
    service.toggle(item);
    expect(service.isSelected(item)).toBeTruthy();
    service.toggle(item);
    expect(service.isSelected(item)).toBeFalsy();
  });

  it('should return getItems() value correctly and apply toggle() actions correctly', () => {
    const item = new Item();
    item.title = '1';
    const item2 = new Item();
    item2.title = '2';

    expect(service.getItems()).toEqual([]);
    service.toggle(item);
    expect(service.getItems()).toEqual([item]);
    service.toggle(item2);
    expect(service.getItems()).toEqual([item, item2]);
    service.toggle(item2);
    expect(service.getItems()).toEqual([item]);
  })
});
