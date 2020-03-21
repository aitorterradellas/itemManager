import { Component, OnInit } from '@angular/core';
import { Item } from '../../entities/item';
import { FavouriteService } from '../../services/favourite.service';
import { SearchForm } from '../../entities/search-form';
import { ItemTitle, ItemName } from '../../entities/item-field';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-favourite-modal',
  templateUrl: './favourite-modal.component.html',
  styleUrls: ['./favourite-modal.component.scss']
})
export class FavouriteModalComponent implements OnInit {
  public items: Item[];

  public searchForm: SearchForm;

  public titles = ItemTitle;
  public names = ItemName;

  constructor(private favouriteService: FavouriteService, private listService: ListService) { }

  ngOnInit() {
    this.searchForm = new SearchForm();
    this.searchForm.isReduced = true;
    this.items = this.favouriteService.getItems();
  }

  search() {
    this.items = this.listService.filter(this.searchForm, null, null, this.favouriteService.getItems());
  }

}
