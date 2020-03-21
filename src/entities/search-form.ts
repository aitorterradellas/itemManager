import { Item } from './item';
import { ItemFields, FieldType } from './item-field';

export class SearchForm {
  fields: any[] = [];
  isReduced: boolean;

  constructor() {
    for (let item of ItemFields) {
      this.fields[item.name] = null;
    }
  }

  isEmpty(): boolean {
    for (let i in this.fields) {
      if (this.fields[i]) return false;
    }

    return true;
  }

  passesFilter(item: Item): boolean {
    if (this.isReduced && this.isEmpty()) {
      return true;
    }

    for (let itemField of ItemFields) {
      if (itemField.type === FieldType.STRING) {
        if (this.fields[itemField.name] &&
          (item[itemField.name] as string).indexOf(this.fields[itemField.name]) != -1) {
          return true;
        }
      } else { //itemField.type === FieldType.NUMBER
        if (this.fields[itemField.name] != undefined &&
          this.fields[itemField.name] != null &&
          this.fields[itemField.name] == item[itemField.name]) {
          return true;
        }
      }
    }

    return false;
  }
}
