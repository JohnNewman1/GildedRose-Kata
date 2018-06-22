const { Shop } = require('../../src/shop');
const { Item } = require('../../src/item');

describe('Shop', () => {
  let shop;
  const item = new Item('name', 10, 10);
  const item2 = new Item('name', 10, 10);
  const items = [item, item2];
  const classes = ['StandardItem', 'MaturingItem', 'ConjuredItem', 'SulfurasItem', 'TicketItem'];

  beforeEach(() => {
    shop = new Shop(items);
    shop.updateQuality();
  });

  it('returns the items', () => {
    expect(shop.items.length).toEqual(items.length);
  });

  it('transforms the items', () => {
    for (let i = 0; i < items.length; i++) {
      expect(classes).toContain(shop.items[i].constructor.name);
    }
  });
});
