const { QualityStrategy } = require('./qualityStrategy');
const { SellInStrategy } = require('./sellInStrategy');

class Shop {
  constructor(items = []) {
    this.items = items;
    this.sellInStrategy = new SellInStrategy();
    this.qualityStrategy = new QualityStrategy();
  }
  updateQuality() {
    this.items.forEach((item) => {
      const qualityStrategy = this.qualityStrategy.getStrategy(item);
      const sellInStrategy = this.sellInStrategy.getStrategy(item);
      qualityStrategy(item);
      sellInStrategy(item);
    });
    return this.items;
  }
}

module.exports.Shop = Shop;
