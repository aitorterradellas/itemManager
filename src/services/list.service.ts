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

    //return this.paginate(pagination, sortField, res);
    return this.sort(pagination, sortField, res);
  }

  private compareField(a: Item, b: Item, field: string): number {
    if (a[field] < b[field]) { return -1; }
    if (a[field] > b[field]) { return 1; }
    return 0;
  }

  sort(pagination: Pagination, field: string, data: Item[]): Item[] {
    if (field) {
      return this.paginate(pagination, data.sort((a, b) => this.compareField(a, b, field)));
    }

    return this.paginate(pagination, data);
  }

  private paginate(pagination: Pagination = null, data: Item[]): Item[] {
    if (pagination) {
      return data.splice(pagination.page * pagination.size, pagination.size);
    }

    return data;
  }


  constructor() { }
}
