const { MaturingItem } = require('./maturingItem');

class TicketItem extends MaturingItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.TRIPLE_QUALITY_CHANGE = 3 * this.QUALITY_CHANGE;
  }

  _updateQuality() {
    if (this._isFiveDaysOrLess()) {
      this.quality += this.TRIPLE_QUALITY_CHANGE;
    } else if (this._isTenDaysOrLess()) {
      this.quality += this.DOUBLE_QUALITY_CHANGE;
    } else {
      this.quality += this.QUALITY_CHANGE;
    }
    this._exceedsMaxQualityCheck();
    this._pastSellInCheck();
  }

  _isTenDaysOrLess() {
    return this.sellIn <= 10;
  }

  _isFiveDaysOrLess() {
    return this.sellIn <= 5;
  }

  _pastSellInCheck() {
    if (this._isPastSellIn()) { this.quality = 0; }
  }
}

module.exports.TicketItem = TicketItem;
