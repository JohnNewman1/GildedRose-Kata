const { StandardItem } = require('../../src/standardItem');

describe('StandardItem', () => {
  let standardItem;
  const name = 'Bread';
  const sellIn = 3;
  const quality = 10;

  beforeEach(() => {
    standardItem = new StandardItem(name, sellIn, quality);
    standardItem.updateProperties();
  });

  it('returns the correct name', () => {
    expect(standardItem.name).toEqual(name);
  });

  it('decrements its sellIn property by one', () => {
    expect(standardItem.sellIn).toEqual(sellIn - 1);
  });

  it('decrements its sellIn property twice', () => {
    standardItem.updateProperties();

    expect(standardItem.sellIn).toEqual(sellIn - 2);
  });

  it('decrements its quality by one while sellIn not negative', () => {
    expect(standardItem.quality).toEqual(quality - 1);
  });

  it('decrements its quality again while sellIn not negative', () => {
    standardItem.updateProperties();

    expect(standardItem.quality).toEqual(quality - 2);
  });

  it('decrements quality twice as fast when past sellIn', () => {
    for (let i = 0; i < 4; i++) { standardItem.updateProperties(); }

    expect(standardItem.quality).toEqual(quality - 7);
  });

  it('never has a quality less than zero', () => {
    for (let i = 0; i < 6; i++) { standardItem.updateProperties(); }

    expect(standardItem.quality).toEqual(0);
  });
});
