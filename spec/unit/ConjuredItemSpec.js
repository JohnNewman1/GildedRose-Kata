const { ConjuredItem } = require('../../src/conjuredItem');

describe('conjuredItem', () => {
  let conjuredItem;
  const name = 'Conjured sword';
  const sellIn = 3;
  const quality = 20;

  beforeEach(() => {
    conjuredItem = new ConjuredItem(name, sellIn, quality);
    conjuredItem.updateProperties();
  });

  it('returns the correct name', () => {
    expect(conjuredItem.name).toEqual(name);
  });

  it('decrements its sellIn property by one', () => {
    expect(conjuredItem.sellIn).toEqual(sellIn - 1);
  });

  it('decrements its quality by two when sellIn > 0', () => {
    expect(conjuredItem.quality).toEqual(quality - 2);
  });

  it('decrements its quality by double when sellIn <= 0', () => {
    for (let i = 0; i < 4; i++) { conjuredItem.updateProperties(); }

    expect(conjuredItem.quality).toEqual(quality - 14);
  });
});
