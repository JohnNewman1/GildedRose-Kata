const { StandardItem } = require('../../src/standardItem');

describe('StandardItem', () => {
  let standardItem;
  const name = 'Bread';
  const sellIn = 10;
  const quality = 5;

  beforeEach(() => {
    standardItem = new StandardItem(name, sellIn, quality);
  });

  it('returns the correct name', () => {
    expect(standardItem.name).toEqual(name);
  });

  it('returns the correct name', () => {
    expect(standardItem.sellIn).toEqual(sellIn);
  });

  it('returns the correct name', () => {
    expect(standardItem.quality).toEqual(quality);
  });

  it('decrements its sellIn property by one', () => {
    standardItem.updateSellIn();

    expect(standardItem.sellIn).toEqual(sellIn - 1);
  });

  it('decrements its sellIn property twice', () => {
    standardItem.updateSellIn();
    standardItem.updateSellIn();

    expect(standardItem.sellIn).toEqual(sellIn - 2);
  });
});
