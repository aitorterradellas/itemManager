import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from '../../services/list.service';
import { MatDialogMock } from '../../testUtils';
import { MatDialog } from '@angular/material/dialog';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
      providers: [DataService, ListService,
        { provide: MatDialog, useClass: MatDialogMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.searchForm).toBeTruthy();
  });

  it('should apply toggleSearch() actions correctly', () => {
    expect(component.searchVisible).toBeTruthy();
    component.toggleSearch();
    expect(component.searchVisible).toBeFalsy();
    component.toggleSearch();
    expect(component.searchVisible).toBeTruthy();
  });

  it('should return isFirst() value and apply next() and prev() actions correctly', () => {
    expect(component.isFirst()).toBeTruthy();
    component.next();
    expect(component.isFirst()).toBeFalsy();
    component.prev();
    expect(component.isFirst()).toBeTruthy();
  });

  it('should return isLast() values correctly', () => {
    expect(component.isLast()).toBeTruthy();
  });

  it('should return getPage() values correctly', () => {
    expect(component.getPage()).toEqual(1);
    component.next();
    expect(component.getPage()).toEqual(2);
    component.prev();
    expect(component.getPage()).toEqual(1);
  });

  it('should return getTotalPages() values correctly', () => {
    expect(component.getTotalPages()).toEqual(0);
  })
});
