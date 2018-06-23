const { SellInStrategy } = require('../../src/sellInStrategy');

describe('SellInStrategy', () => {
  let sellInStrategy;
  let fakeItem;
  let fakeSulfuras;

  beforeEach(() => {
    sellInStrategy = new SellInStrategy();
    fakeItem = {
      name: 'any',
      sellIn: 1,
    };
    fakeSulfuras = {
      name: 'Sulfuras, Hand of Ragnaros',
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

  it('returns the default strategy for non Sulfuras ', () => {
    const strategy = sellInStrategy.getStrategy(fakeItem);
    expect(strategy).toEqual(sellInStrategy.defaultStrategy);
  });

  it('returns the sulfuras strategy for Sulfuras item', () => {
    const strategy = sellInStrategy.getStrategy(fakeSulfuras);
    expect(strategy).toEqual(sellInStrategy.sulfurasStrategy);
  });
});
