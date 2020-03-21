import { Injectable } from '@angular/core';
import { SearchForm } from '../entities/search-form';
import { Item } from '../entities/item';
import { Pagination, PAGE_SIZE } from '../entities/pagination';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  filter(searchForm: SearchForm, sortField: string, pagination: Pagination, data: any): Item[] {
    let res: Item[] = [];
    for (let item of data as Item[]) {
      let b = searchForm.passesFilter(item)
      if (b) {
        res.push(new Item(item));
      }
    }

    if (pagination) pagination.total = res.length;

    return this.paginate(pagination, sortField, res);
  }

  private compareField(a: Item, b: Item, field: string): number {
    if (a[field] < b[field]) { return -1; }
    if (a[field] > b[field]) { return 1; }
    return 0;
  }

  sort(field: string, data: Item[]): Item[] {
    if (field) {
      return data.sort((a, b) => this.compareField(a, b, field));
    }

    return data;
  }

  private paginate(pagination: Pagination = null, sortField: string, data: Item[]): Item[] {
    if (pagination) {
      return this.sort(sortField, data.splice(pagination.page * pagination.size, pagination.size));
    }

    return this.sort(sortField, data);
  }


  constructor() { }
}
