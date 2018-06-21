const { Item } = require('./item');

class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_DECREMENT = 1;
    this.NEW_QUALITY_DECREMENT = 2;
  }

  updateProperties() {
    this._updateQuality();
    this._updateSellIn();
  }

  _updateSellIn() {
    this.sellIn -= 1;
  }

  _updateQuality() {
    this.quality -= (this._isPastSellIn()) ? this.NEW_QUALITY_DECREMENT : this.QUALITY_DECREMENT;
    this._nonZeroQualityCheck();
  }

  _isPastSellIn() {
    return this.sellIn <= 0;
  }

  _nonZeroQualityCheck() {
    this.quality = (this.quality < 0) ? 0 : this.quality;
  }
}

module.exports.StandardItem = StandardItem;
