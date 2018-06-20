const { Shop } = require('../../src/shop');

describe('Shop', () => {
  let shop;
  const items = ['An Item'];

  beforeEach(() => {
    shop = new Shop(items);
  });

  it('returns the items', () => {
    expect(shop.items).toEqual(items);
  });
});
