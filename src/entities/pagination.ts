export const PAGE_SIZE = 5;

export class Pagination {
  size: number;
  page: number;
  total: number;

  constructor() {

  }

  isFirst(): boolean {
    return this.page === 0;
  }

  isLast(): boolean {
    return this.page + 1 >= this.getTotalPages();
  }

  getTotalPages(): number {
    if (!this.size) return 0;

    return Math.ceil(this.total / this.size);
  }
}


