import { SearchForm } from './search-form';
import { Item } from './item';

describe('SearchForm', () => {
  let searchForm: SearchForm;

  beforeEach(() => {
    searchForm = new SearchForm();
  });

  it('should create an instance', () => {
    expect(searchForm).toBeTruthy();
  });

  it('should return isEmpty() value as true', () => {
    expect(searchForm.isEmpty()).toBeTruthy();
  });

  it('should return passesFilter() value correctly', () => {
    const item = new Item();
    expect(searchForm.passesFilter(item)).toBeTruthy();
  });
});
