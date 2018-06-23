const { Shop } = require('../../src/shop');
const { Item } = require('../../src/item');

describe('Shop', () => {
  let shop;
  const item = new Item('name', 10, 10);
  const item2 = new Item('name', 10, 10);
  const items = [item, item2];

  beforeEach(() => {
    shop = new Shop(items);
    shop.updateQuality();
  });

  it('returns the items', () => {
    expect(shop.items.length).toEqual(items.length);
  });
});
