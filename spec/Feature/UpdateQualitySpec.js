const { Item } = require('../../src/item');
const { Shop } = require('../../src/shop');
const { extractItemProperties } = require('../helpers/FeatureHelpers');

describe('Updating the quality feature test', () => {
  let items;
  let shop;

  beforeEach(() => {
    items = [];
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Elixir of the Mongoose', 0, 1));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 21));
    shop = new Shop(items);
  });

  it('updates the quality of the items correctly after one day', () => {
    shop.updateQuality();
    const properties = extractItemProperties(shop.items);

    expect(properties.sellIns).toEqual([9, 1, 4, -1, 0, 14]);
    expect(properties.qualities).toEqual([19, 1, 6, 0, 80, 22]);
  });

  it('updates the quality of the items correctly after 10 days', () => {
    for (let i = 0; i < 10; i++) { shop.updateQuality(); }
    const properties = extractItemProperties(shop.items);

    expect(properties.sellIns).toEqual([0, -8, -5, -10, 0, 5]);
    expect(properties.qualities).toEqual([10, 18, 0, 0, 80, 36]);
  });

  it('updates the quality of the items correctly after 15 days', () => {
    for (let i = 0; i < 15; i++) { shop.updateQuality(); }
    const properties = extractItemProperties(shop.items);

    expect(properties.sellIns).toEqual([-5, -13, -10, -15, 0, 0]);
    expect(properties.qualities).toEqual([0, 28, 0, 0, 80, 50]);
  });

  it('updates the quality of the items correctly after 16 days', () => {
    for (let i = 0; i < 16; i++) { shop.updateQuality(); }
    const properties = extractItemProperties(shop.items);

    expect(properties.sellIns).toEqual([-6, -14, -11, -16, 0, -1]);
    expect(properties.qualities).toEqual([0, 30, 0, 0, 80, 0]);
  });
});
