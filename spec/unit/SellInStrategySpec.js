const { SellInStrategy } = require('../../src/sellInStrategy');
const { Item } = require('../../src/item');

describe('SellInStrategy', () => {
  let sellInStrategy;
  const item = new Item('name', 1, 1);
  let fakeItem;

  beforeEach(() => {
    sellInStrategy = new SellInStrategy();
    fakeItem = {
      sellIn: 1,
    };
  });

  it('has a defualt strategy that decrements the sellIn value', () => {
    sellInStrategy.defaultStrategy(fakeItem);
    expect(fakeItem.sellIn).toEqual(0);
  });

  it('has a sulfuras strategy that does nothing', () => {
    sellInStrategy.sulfurasStrategy(fakeItem);
    expect(fakeItem.sellIn).toEqual(1);
  });

  // it('returns a function that decrements the sellIn of an Item by default', () => {
  //   const nameSpy = spyOnProperty(item, 'name', 'get').andReturn('any name');
  //   sellInStrategy.getSellInStrategy(item);
  //   expect(nameSpy).toHaveBeenCalled();
  //   expect(sellInStrategy.defaultStrategy).toHaveBeenCalledWith(item);
  // });
});
