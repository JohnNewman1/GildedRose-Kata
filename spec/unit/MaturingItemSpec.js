const { MaturingItem } = require('../../src/maturingItem');

describe('MaturingItem', () => {
  let maturingItem;
  const name = 'Aged Brie';
  const sellIn = 3;
  const quality = 40;

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

  it('prevents quality increasing above 50', () => {
    for (let i = 0; i < 6; i++) { maturingItem.updateProperties(); }

    expect(maturingItem.quality).toEqual(50);
  });

  it('prevents quality increasing above 50 different start quality', () => {
    const newMaturingItem = new MaturingItem(name, sellIn, 47);
    for (let i = 0; i < 4; i++) { newMaturingItem.updateProperties(); }

    expect(newMaturingItem.quality).toEqual(50);
  });
});
