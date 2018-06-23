const { QualityStrategy } = require('../../src/qualityStrategy');

describe('QualityStrategy', () => {
  let qualityStrategy;
  let fakeItem;
  let pastSellInItem;

  beforeEach(() => {
    qualityStrategy = new QualityStrategy();
    fakeItem = {
      name: 'any',
      sellIn: 1,
      quality: 10,
    };
    pastSellInItem = {
      name: 'any',
      sellIn: 0,
      quality: 10,
    };
  });

  describe('defaultStrategy', () => {
    it('has a default strategy that decrements the quality when sellIn > 0', () => {
      qualityStrategy.defaultStrategy(fakeItem);

      expect(fakeItem.quality).toEqual(9);
    });

    it('has a default strategy that decrements the quality by 2 sellIn <= 0', () => {
      qualityStrategy.defaultStrategy(pastSellInItem);

      expect(pastSellInItem.quality).toEqual(8);
    });

    it('has a default strategy that stops the quality going below 0', () => {
      const pastSellInItem2 = {
        name: 'any',
        sellIn: 0,
        quality: 1,
      };
      qualityStrategy.defaultStrategy(pastSellInItem2);

      expect(pastSellInItem2.quality).toEqual(0);
    });

    it('has a default strategy that stops the quality going below 0 from different start', () => {
      const fakeItem2 = {
        name: 'any',
        sellIn: 1,
        quality: 0,
      };
      qualityStrategy.defaultStrategy(fakeItem2);

      expect(fakeItem2.quality).toEqual(0);
    });
  });

  describe('agedBrieStrategy', () => {
    it('has an Aged Brie strategy that increments the quality by one when sellIn > 0', () => {
      qualityStrategy.agedBrieStrategy(fakeItem);

      expect(fakeItem.quality).toEqual(11);
    });

    it('has an Aged Brie strategy that increments the quality by two when sellIn <= 0', () => {
      qualityStrategy.agedBrieStrategy(pastSellInItem);

      expect(pastSellInItem.quality).toEqual(12);
    });

    it('has an Aged Brie strategy that stops the quality going above 50', () => {
      const pastSellInItem2 = {
        name: 'any',
        sellIn: 0,
        quality: 49,
      };
      qualityStrategy.agedBrieStrategy(pastSellInItem2);

      expect(pastSellInItem2.quality).toEqual(50);
    });

    it('has an Aged Brie strategy that stops the quality going above 50 from another start', () => {
      const pastSellInItem2 = {
        name: 'any',
        sellIn: 1,
        quality: 50,
      };
      qualityStrategy.agedBrieStrategy(pastSellInItem2);

      expect(pastSellInItem2.quality).toEqual(50);
    });
  });

  describe('sulfurasStrategy', () => {
    it('has a sulfuras strategy that does nothing when sellIn > 0', () => {
      qualityStrategy.sulfurasStrategy(fakeItem);
      expect(fakeItem.quality).toEqual(10);
    });

    it('has a sulfuras strategy that does nothing when sellIn > 0', () => {
      qualityStrategy.sulfurasStrategy(pastSellInItem);
      expect(pastSellInItem.quality).toEqual(10);
    });
  });

  describe('conjuredStrategy', () => {
    it('has a conjured strategy that decrements the quality by twice the default when sellIn > 0', () => {
      qualityStrategy.conjuredStrategy(fakeItem);

      expect(fakeItem.quality).toEqual(8);
    });

    it('has a conjurd strategy that decrements the quality at twice the rate when sellIn <= 0', () => {
      qualityStrategy.conjuredStrategy(pastSellInItem);

      expect(pastSellInItem.quality).toEqual(6);
    });

    it('has a conjured strategy that stops the quality going below 0', () => {
      const pastSellInItem2 = {
        name: 'any',
        sellIn: 0,
        quality: 1,
      };
      qualityStrategy.conjuredStrategy(pastSellInItem2);

      expect(pastSellInItem2.quality).toEqual(0);
    });

    it('has a conjured strategy that stops the quality going below 0 from different start', () => {
      const fakeItem2 = {
        name: 'any',
        sellIn: 1,
        quality: 0,
      };
      qualityStrategy.conjuredStrategy(fakeItem2);

      expect(fakeItem2.quality).toEqual(0);
    });
  });
});
