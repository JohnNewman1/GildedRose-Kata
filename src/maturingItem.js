const { StandardItem } = require('./standardItem');

class MaturingItem extends StandardItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_CHANGE = -1;
  }
}

module.exports.MaturingItem = MaturingItem;
