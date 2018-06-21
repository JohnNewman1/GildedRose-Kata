const { StandardItem } = require('./standardItem');

class MaturingItem extends StandardItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.MAX_QUALITY = 50;
  }

  _updateQuality() {
    this.quality += (this._isPastSellIn()) ? this.DOUBLE_QUALITY_CHANGE : this.QUALITY_CHANGE;
    this._exceedsMaxQualityCheck();
  }

  _exceedsMaxQualityCheck() {
    this.quality = (this.quality > this.MAX_QUALITY) ? this.MAX_QUALITY : this.quality;
  }
}

module.exports.MaturingItem = MaturingItem;
