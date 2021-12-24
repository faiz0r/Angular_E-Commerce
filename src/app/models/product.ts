export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    description = '',
    price = 0,
    imageUrl = 'https://i.guim.co.uk/img/media/af8ee7ce17c44bfe5672bdd496ada5c0d2305780/0_261_3386_2031/master/3386.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4673d6d3295863573a3322c9b0242668'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
