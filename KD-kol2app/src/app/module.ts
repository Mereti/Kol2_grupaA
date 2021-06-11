export interface Item {
  id: number;
  title: string;
  text: string;
  image: string;
  price: number;
}

export interface Items {
  items: Item[];
}
