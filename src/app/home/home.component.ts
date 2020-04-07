import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { Item } from '../../entities/item';
import { SearchForm } from '../../entities/search-form';
import { ListService } from '../../services/list.service';
import { ItemTitle, ItemName, ItemFields } from '../../entities/item-field';
import { Pagination, PAGE_SIZE } from '../../entities/pagination';
import { MatDialog } from '@angular/material/dialog';
import { FavouriteModalComponent } from '../favourite-modal/favourite-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private dataService: DataService,
    private listService: ListService,
    private dialog: MatDialog
  ) { }
  private serviceSubscription: Subscription;
  public items: Item[] = [];
  public searchVisible: boolean = true;
  public searchForm: SearchForm;

  public titles = ItemTitle;
  public names = ItemName;
  public options = ItemFields;
  public sortField: string;

  private pagination: Pagination = new Pagination();

  ngOnInit() {
    this.searchForm = new SearchForm();
    this.pagination.page = 0;
    this.pagination.total = 0;
    this.pagination.size = PAGE_SIZE;
    this.getItems();
  }

  isFirst(): boolean {
    return this.pagination.isFirst();
  }

  isLast(): boolean {
    return this.pagination.isLast();
  }

  next() {
    this.pagination.page++;
    this.getItems();
  }

  prev() {
    this.pagination.page--;
    this.getItems();
  }

  getItems() {
    this.serviceSubscription = this.dataService.getItems().subscribe((data) => {
      //console.log("data", data);
      const newItems = this.listService.filter(this.searchForm, this.sortField, this.pagination, data.items);
      this.items = newItems;
    });
  }

  getPage(): number {
    return this.pagination.page + 1;
  }

  getTotalPages(): number {
    return this.pagination.getTotalPages();
  }

  sort() {
    this.serviceSubscription = this.dataService.getItems().subscribe((data) => {
      this.items = this.listService.filter(this.searchForm, this.sortField, this.pagination, data.items);
    });
  }

  search() {
    this.pagination.page = 0;
    this.serviceSubscription = this.dataService.getItems().subscribe((data) => {
      this.items = this.listService.filter(this.searchForm, this.sortField, this.pagination, data.items);
    });
  }

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }

  openModal() {
    const dialogRef = this.dialog.open(FavouriteModalComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    this.serviceSubscription.unsubscribe();
  }
}
