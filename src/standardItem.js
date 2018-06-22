const { Item } = require('./item');

class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_CHANGE = 1;
    this.MAX_QUALITY = 50;
  }

  updateProperties() {
    this._updateQuality();
    this._updateSellIn();
  }

  _updateSellIn() {
    this.sellIn -= 1;
  }

  _updateQuality() {
    this.quality -= this.QUALITY_CHANGE;
    this._pastSellInCheck();
    this._checkQualityLimits();
  }

  _pastSellInCheck() {
    if (this.sellIn <= 0) { this.quality -= this.QUALITY_CHANGE; }
  }

  _checkQualityLimits() {
    if (this.quality > this.MAX_QUALITY) { this.quality = this.MAX_QUALITY; }
    if (this.quality < 0) { this.quality = 0; }
  }
}

module.exports.StandardItem = StandardItem;
