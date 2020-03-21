export class Item {
  title: string;
  description: string;
  price: number;
  email: string;
  image: string;

  constructor(item? : Item) {
    if (item) {
      this.title = item.title;
      this.description = item.description;
      this.price = +item.price;
      this.email = item.email;
      this.image = item.image;
    }
  }
}
