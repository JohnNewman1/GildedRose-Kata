const { QualityStrategy } = require('../../src/qualityStrategy');

describe('QualityStrategy', () => {
  let qualityStrategy;
  let fakeItem;

  beforeEach(() => {
    qualityStrategy = new QualityStrategy();
    fakeItem = {
      name: 'any',
      sellIn: 1,
      quality: 10,
    };
    qualityStrategy.defaultStrategy(fakeItem);
  });

  it('has a default strategy that decrements the quality when sellIn > 0', () => {
    expect(fakeItem.quality).toEqual(9);
  });

  it('has a default strategy that decrements the quality by 2 sellIn <= 0', () => {
    const pastSellInItem = {
      name: 'any',
      sellIn: 0,
      quality: 10,
    };
    qualityStrategy.defaultStrategy(pastSellInItem);
    expect(pastSellInItem.quality).toEqual(8);
  });
});
