import { Injectable } from '@angular/core';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favourites: Item[] = [];

  constructor() { }

  isSelected(selectedItem: Item) {
    for (let item of this.favourites) {
      if (item.title == selectedItem.title) {
        return true;
      }
    }

    return false;
  }

  getItems(): Item[] {
    return this.favourites;
  }

  toggle(toggledItem: Item) {
    let found = false;
    for (let item of this.favourites) {
      if (item.title == toggledItem.title) {
        var index = this.favourites.indexOf(item);
        this.favourites.splice(index, 1);
        found = true;
      }
    }

    if (!found) {
      this.favourites.push(toggledItem);
    }

    console.log("Favourites", this.favourites);
  }
}
