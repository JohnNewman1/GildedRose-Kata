class SellInStrategy {
  constructor() {
    this.strategies = {
      Default: this.defaultStrategy,
      'Sulfuras, Hand of Ragnaros': this.sulfurasStrategy,
    };
  }

  getStrategy(item) {
    return this.strategies[item.name] || this.strategies.Default;
  }

  defaultStrategy(item) {
    item.sellIn -= 1;
  }

  sulfurasStrategy() {}
}

module.exports.SellInStrategy = SellInStrategy;
