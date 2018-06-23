class SellInStrategy {
  constructor() {
    this.strategies = {
      Default: this.defaultStrategy,
      'Sulfuras, Hand of Ragnaros': this.sulfurasStrategy,
    };
  }

  defaultStrategy(item) {
    item.sellIn -= 1;
  }

  sulfurasStrategy() {}
}

module.exports.SellInStrategy = SellInStrategy;
