import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../entities/item';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  item: Item = new Item();

  @Input()
  isReduced: boolean = false;

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit() {
  }

  toggle() {
    this.favouriteService.toggle(this.item);
  }

  isSelected() {
    return this.favouriteService.isSelected(this.item);
  }

  
}
