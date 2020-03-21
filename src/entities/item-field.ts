export class ItemField {
  title: ItemTitle;
  name: ItemName;
  type: FieldType;
}

export enum FieldType {
  STRING,
  NUMBER
}

export enum ItemTitle {
  TITLE = 'Title',
  DESCRIPTION = 'Description',
  PRICE = 'Price',
  EMAIL = 'Email'
}

export enum ItemName {
  TITLE = 'title',
  DESCRIPTION = 'description',
  PRICE = 'price',
  EMAIL = 'email'
}

export const ItemFields: ItemField[] = [
  { title: ItemTitle.TITLE, name: ItemName.TITLE, type: FieldType.STRING },
  { title: ItemTitle.DESCRIPTION, name: ItemName.DESCRIPTION, type: FieldType.STRING },
  { title: ItemTitle.PRICE, name: ItemName.PRICE, type: FieldType.NUMBER },
  { title: ItemTitle.EMAIL, name: ItemName.EMAIL, type: FieldType.STRING }
];
