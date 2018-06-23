const { StandardItem } = require('./standardItem');

class TicketItem extends StandardItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.QUALITY_INCREMENT = -1;
  }

  _updateQuality() {
    this._incrementQuality();
    this._tenDaysOrLessCheck();
    this._fiveDaysOrLessCheck();
    this._pastSellInCheck();
    this._checkQualityLimits();
  }

  _tenDaysOrLessCheck() {
    if (this.sellIn <= 10) { this._incrementQuality(); }
  }

  _fiveDaysOrLessCheck() {
    if (this.sellIn <= 5) { this._incrementQuality(); }
  }

  _pastSellInCheck() {
    if (this.sellIn <= 0) { this.quality = 0; }
  }
}

module.exports.TicketItem = TicketItem;
