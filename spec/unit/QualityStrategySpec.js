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
    it('decrements the quality when sellIn > 0', () => {
      qualityStrategy.defaultStrategy(fakeItem);

      expect(fakeItem.quality).toEqual(9);
    });

    it('decrements the quality by 2 sellIn <= 0', () => {
      qualityStrategy.defaultStrategy(pastSellInItem);

      expect(pastSellInItem.quality).toEqual(8);
    });

    it('stops the quality going below 0', () => {
      const pastSellInItem2 = {
        name: 'any',
        sellIn: 0,
        quality: 1,
      };
      qualityStrategy.defaultStrategy(pastSellInItem2);

      expect(pastSellInItem2.quality).toEqual(0);
    });

    it('stops the quality going below 0 from different start', () => {
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
    it('increments the quality by one when sellIn > 0', () => {
      qualityStrategy.agedBrieStrategy(fakeItem);

      expect(fakeItem.quality).toEqual(11);
    });

    it('increments the quality by two when sellIn <= 0', () => {
      qualityStrategy.agedBrieStrategy(pastSellInItem);

      expect(pastSellInItem.quality).toEqual(12);
    });

    it('stops the quality going above 50', () => {
      const pastSellInItem2 = {
        name: 'any',
        sellIn: 0,
        quality: 49,
      };
      qualityStrategy.agedBrieStrategy(pastSellInItem2);

      expect(pastSellInItem2.quality).toEqual(50);
    });

    it('stops the quality going above 50 from another start', () => {
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
    it('does nothing when sellIn > 0', () => {
      qualityStrategy.sulfurasStrategy(fakeItem);
      expect(fakeItem.quality).toEqual(10);
    });

    it('does nothing when sellIn > 0', () => {
      qualityStrategy.sulfurasStrategy(pastSellInItem);
      expect(pastSellInItem.quality).toEqual(10);
    });
  });

  describe('conjuredStrategy', () => {
    it('decrements the quality by twice the default when sellIn > 0', () => {
      qualityStrategy.conjuredStrategy(fakeItem);

      expect(fakeItem.quality).toEqual(8);
    });

    it('decrements the quality at twice the rate when sellIn <= 0', () => {
      qualityStrategy.conjuredStrategy(pastSellInItem);

      expect(pastSellInItem.quality).toEqual(6);
    });

    it('stops the quality going below 0', () => {
      const pastSellInItem2 = {
        name: 'any',
        sellIn: 0,
        quality: 1,
      };
      qualityStrategy.conjuredStrategy(pastSellInItem2);

      expect(pastSellInItem2.quality).toEqual(0);
    });

    it('stops the quality going below 0 from different start', () => {
      const fakeItem2 = {
        name: 'any',
        sellIn: 1,
        quality: 0,
      };
      qualityStrategy.conjuredStrategy(fakeItem2);

      expect(fakeItem2.quality).toEqual(0);
    });
  });

  describe('ticketStrategy', () => {
    it('increases the quality by one when there are more than 10 days to go', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 12,
        quality: 40,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(41);
    });

    it('increases the quality by two when there are 10 days or less to go', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 10,
        quality: 40,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(42);
    });

    it('increases the quality by two when there are 10 days or less to go', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 9,
        quality: 40,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(42);
    });

    it('increases the quality by two when there are 5 days or less to go', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 5,
        quality: 40,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(43);
    });

    it('increases the quality by two when there are 5 days or less to go', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 4,
        quality: 40,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(43);
    });

    it('sets the quality to zero when there are 0 days or less to go', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 0,
        quality: 40,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(0);
    });

    it('stops the quality exceeding 50', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 10,
        quality: 49,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(50);
    });

    it('stops the quality exceeding 50 from different start', () => {
      const fakeTicket = {
        name: 'ticket',
        sellIn: 5,
        quality: 50,
      };
      qualityStrategy.ticketStrategy(fakeTicket);

      expect(fakeTicket.quality).toEqual(50);
    });
  });

  it('returns the default strategy for normal items', () => {
    const strategy = qualityStrategy.getStrategy(fakeItem);
    expect(strategy).toEqual(qualityStrategy.defaultStrategy);
  });

  it('returns the sulfuras strategy for Sulfuras item', () => {
    const fakeSulfuras = { name: 'Sulfuras, Hand of Ragnaros' };
    const strategy = qualityStrategy.getStrategy(fakeSulfuras);
    expect(strategy).toEqual(qualityStrategy.sulfurasStrategy);
  });

  it('returns the agedBrie strategy for Aged Brie item', () => {
    const fakeBrie = { name: 'Aged Brie' };
    const strategy = qualityStrategy.getStrategy(fakeBrie);
    expect(strategy).toEqual(qualityStrategy.agedBrieStrategy);
  });

  it('returns the conjured strategy for conjured item', () => {
    const fakeConjured = { name: 'Conjured Item' };
    const strategy = qualityStrategy.getStrategy(fakeConjured);
    expect(strategy).toEqual(qualityStrategy.conjuredStrategy);
  });

  it('returns the ticket strategy for ticket item', () => {
    const fakeTicket = { name: 'Backstage passes to a TAFKAL80ETC concert' };
    const strategy = qualityStrategy.getStrategy(fakeTicket);
    expect(strategy).toEqual(qualityStrategy.ticketStrategy);
  });
});
