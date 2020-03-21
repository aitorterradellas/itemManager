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

  it('should return canLoad() value correctly', () => {
    expect(component.canLoad()).toBeFalsy();
  });

  it('should apply toggleSearch() actions correctly', () => {
    expect(component.searchVisible).toBeTruthy();
    component.toggleSearch();
    expect(component.searchVisible).toBeFalsy();
    component.toggleSearch();
    expect(component.searchVisible).toBeTruthy();
  })
});
