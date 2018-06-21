const { MaturingItem } = require('../../src/maturingItem');

describe('MaturingItem', () => {
  let maturingItem;
  const name = 'Aged Brie';
  const sellIn = 3;
  const quality = 20;

  beforeEach(() => {
    maturingItem = new MaturingItem(name, sellIn, quality);
    maturingItem.updateProperties();
  });

  it('returns the correct name', () => {
    expect(maturingItem.name).toEqual(name);
  });

  it('calls the updateProperties method on the super class', () => {
    expect(maturingItem.sellIn).toEqual(sellIn - 1);
  });

  it('increases quality by one while sellIn positive', () => {
    expect(maturingItem.quality).toEqual(quality + 1);
  });

  it('increases quality by two when sellIn becomes negative', () => {
    for (let i = 0; i < 4; i++) { maturingItem.updateProperties(); }

    expect(maturingItem.quality).toEqual(quality + 7);
  });
});
