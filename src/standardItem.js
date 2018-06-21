const { Item } = require('./item');

class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_CHANGE = 1;
    this.DOUBLE_QUALITY_CHANGE = 2;
  }

  updateProperties() {
    this._updateQuality();
    this._updateSellIn();
  }

  _updateSellIn() {
    this.sellIn -= 1;
  }

  _updateQuality() {
    this.quality -= (this._isPastSellIn()) ? this.DOUBLE_QUALITY_CHANGE : this.QUALITY_CHANGE;
    this._nonZeroQualityCheck();
  }

  _isPastSellIn() {
    return this.sellIn <= 0;
  }

  _nonZeroQualityCheck() {
    if (this.quality < 0) { this.quality = 0; }
  }
}

module.exports.StandardItem = StandardItem;
