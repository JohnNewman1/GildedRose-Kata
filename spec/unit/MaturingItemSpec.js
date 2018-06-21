const { MaturingItem } = require('../../src/maturingItem');

describe('MaturingItem', () => {
  let maturingItem;
  const name = 'Aged Brie';
  const sellIn = 3;
  const quality = 20;

  beforeEach(() => {
    maturingItem = new MaturingItem(name, sellIn, quality);
  });

  it('returns the correct name', () => {
    expect(maturingItem.name).toEqual(name);
  });
});
