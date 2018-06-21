const { SulfurasItem } = require('../../src/sulfurasItem');

describe('SulfurasItem', () => {
  let sulfurasItem;
  const name = 'Sulfuras, Hand of Ragnaros';
  const sellIn = 0;
  const quality = 80;

  beforeEach(() => {
    sulfurasItem = new SulfurasItem(name, sellIn, quality);
    sulfurasItem.updateProperties();
  });

  it('returns the correct name', () => {
    expect(sulfurasItem.name).toEqual(name);
  });

  it('does not change the sellIn', () => {
    expect(sulfurasItem.sellIn).toEqual(sellIn);
  });

  it('does not change the quality', () => {
    expect(sulfurasItem.quality).toEqual(quality);
  });
});
