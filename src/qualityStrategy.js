class QualityStrategy {
  constructor() {
    this.strategies = {
      Default: this.defaultStrategy,
      'Aged Brie': this.agedBrieStrategy,
      'Conjured Item': this.conjuredStrategy,
      'Backstage passes to a TAFKAL80ETC concert': this.ticketStrategy,
      'Sulfuras, Hand of Ragnaros': this.sulfurasStrategy,
    };
    this.MAX_QUALITY = 50;
  }

  defaultStrategy(item) {
    this.qualityIncrement = 1;
    this._incrementQuality(item);
    this._pastSellInCheck(item);
    this._checkQualityLimits(item);
  }

  agedBrieStrategy(item) {
    this.qualityIncrement = -1;
    this._incrementQuality(item);
    this._pastSellInCheck(item);
    this._checkQualityLimits(item);
  }

  ticketStrategy(item) {
    this.qualityIncrement = -1;
    this._incrementQuality(item);
    this._tenDaysOrLessCheck(item);
    this._fiveDaysOrLessCheck(item);
    this._eventOverCheck(item);
    this._checkQualityLimits(item);
  }

  sulfurasStrategy() { }

  conjuredStrategy(item) {
    this.qualityIncrement = 2;
    this._incrementQuality(item);
    this._pastSellInCheck(item);
    this._checkQualityLimits(item);
  }

  _pastSellInCheck(item) {
    if (item.sellIn <= 0) { this._incrementQuality(item); }
  }

  _incrementQuality(item) { item.quality -= this.qualityIncrement; }

  _checkQualityLimits(item) {
    if (item.quality < 0) { item.quality = 0; }
    if (item.quality > this.MAX_QUALITY) { item.quality = this.MAX_QUALITY; }
  }

  _tenDaysOrLessCheck(item) {
    if (item.sellIn <= 10) { this._incrementQuality(item); }
  }

  _fiveDaysOrLessCheck(item) {
    if (item.sellIn <= 5) { this._incrementQuality(item); }
  }

  _eventOverCheck(item) {
    if (item.sellIn <= 0) { item.quality = 0; }
  }
}

module.exports.QualityStrategy = QualityStrategy;
