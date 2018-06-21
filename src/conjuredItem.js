const { StandardItem } = require('./standardItem');

class ConjuredItem extends StandardItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_CHANGE = this.DOUBLE_QUALITY_CHANGE;
  }
}

module.exports.ConjuredItem = ConjuredItem;
