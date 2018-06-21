const { Shop } = require('../../src/shop');
const { StandardItem } = require('../../src/standardItem');

describe('Shop', () => {
  let shop;
  const item = new StandardItem('name', 10, 10);
  const item2 = new StandardItem('name', 10, 10);
  const items = [item, item2];

  beforeEach(() => {
    shop = new Shop(items);
    spyOn(item, 'updateProperties');
    spyOn(item2, 'updateProperties');
    shop.updateQuality();
  });

  it('returns the items', () => {
    expect(shop.items).toEqual(items);
  });

  it('calls updateProperties on items', () => {
    expect(item.updateProperties).toHaveBeenCalled();
    expect(item2.updateProperties).toHaveBeenCalled();
  });
});
