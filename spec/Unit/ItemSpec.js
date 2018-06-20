const { Item } = require('../../src/item');

describe('Item', () => {
  let item;
  const name = 'Bread';
  const sellIn = 10;
  const quality = 5;

  beforeEach(() => {
    item = new Item(name, sellIn, quality);
  });

  it('returns the correct name', () => {
    expect(item.name).toEqual(name);
  });

  it('returns the correct name', () => {
    expect(item.sellIn).toEqual(sellIn);
  });

  it('returns the correct name', () => {
    expect(item.quality).toEqual(quality);
  });
});
