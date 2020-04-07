import { Pagination, PAGE_SIZE } from './pagination';

describe('Pagination', () => {
  let p;
  beforeEach(() => {
    p = new Pagination();
    p.page = 0;
    p.size = PAGE_SIZE;
    p.total = 9;
  });

  it('should create an instance', () => {
    expect(new Pagination()).toBeTruthy();
  });

  it('should return getTotalPages() value correctly', () => {
    expect(p.getTotalPages()).toEqual(2);
  });

  it('should return isFirst() value correctly', () => {
    expect(p.isFirst()).toBeTruthy();
    p.page = 1;
    expect(p.isFirst()).toBeFalsy();
    p.page = 0;
    expect(p.isFirst()).toBeTruthy();
  });

  it('should return isLast() value correctly', () => {
    expect(p.isLast()).toBeFalsy();
    p.page = 1;
    expect(p.isLast()).toBeTruthy();
    p.page = 0;
    expect(p.isLast()).toBeFalsy();
  });
});
