const { StandardItem } = require('./standardItem');

class ConjuredItem extends StandardItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_INCREMENT = 2 * this.QUALITY_INCREMENT;
  }
}

module.exports.ConjuredItem = ConjuredItem;
