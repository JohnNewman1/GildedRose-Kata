const { Item } = require('./item');

class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_INCREMENT = 1;
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
    this._incrementQuality();
    this._pastSellInCheck();
    this._checkQualityLimits();
  }

  _pastSellInCheck() {
    if (this.sellIn <= 0) { this._incrementQuality(); }
  }

  _incrementQuality() { this.quality -= this.QUALITY_INCREMENT; }

  _checkQualityLimits() {
    if (this.quality > this.MAX_QUALITY) { this.quality = this.MAX_QUALITY; }
    if (this.quality < 0) { this.quality = 0; }
  }
}

module.exports.StandardItem = StandardItem;
