import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item()).toBeTruthy();
  });

  it('should create an item with the same field values', () => {
    const item = new Item();
    item.description = 'a';
    item.email = 'b';
    item.image = 'c';
    item.title = 'd';
    item.price = 0;

    const newItem = new Item(item);
    expect(newItem.description).toBe('a');
    expect(newItem.email).toBe('b');
    expect(newItem.title).toBe('d');
    expect(newItem.price).toBe(0);
  });
});
