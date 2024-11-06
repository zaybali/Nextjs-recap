export type productItemType = {
  id: number;
  name: string;
  price: number;
  category: 'Sort By Price'|'All'|'Clothes'|'Mobiles'|'Cars'|'Laptops'|'Gadgets';
};