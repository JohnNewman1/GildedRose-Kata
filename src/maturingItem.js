const { StandardItem } = require('./standardItem');

class MaturingItem extends StandardItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_INCREMENT = -1;
  }
}

module.exports.MaturingItem = MaturingItem;
