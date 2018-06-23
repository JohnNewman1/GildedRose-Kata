class SellInStrategy {
  constructor() {
    this.strategies = {
      Default: this.defaultStrategy,
      'Sulfuras, Hand of Ragnaros': this.sulfurasStrategy,
    };
  }

  getSellInStrategy(item) {
    return this.strategies[item.name] || this.strategies.Default;
  }

  defaultStrategy(item) {
    item.sellIn -= 1;
  }

  sulfurasStrategy() {}
}

module.exports.SellInStrategy = SellInStrategy;
