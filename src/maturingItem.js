const { StandardItem } = require('./standardItem');

class MaturingItem extends StandardItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.MAX_QUALITY = 50;
  }

  _updateQuality() {
    if (this._isPastSellIn()) {
      this.quality += this.DOUBLE_QUALITY_CHANGE;
    } else {
      this.quality += this.QUALITY_CHANGE;
    }
    this._exceedsMaxQualityCheck();
  }

  _exceedsMaxQualityCheck() {
    if (this.quality > this.MAX_QUALITY) { this.quality = this.MAX_QUALITY; }
  }
}

module.exports.MaturingItem = MaturingItem;
