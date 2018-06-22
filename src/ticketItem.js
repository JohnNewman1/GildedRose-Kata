const { StandardItem } = require('./standardItem');

class TicketItem extends StandardItem {
  _updateQuality() {
    this.quality += this.QUALITY_CHANGE;
    this._tenDaysOrLessCheck();
    this._fiveDaysOrLessCheck();
    this._checkQualityLimits();
    this._pastSellInCheck();
  }

  _tenDaysOrLessCheck() {
    if (this.sellIn <= 10) { this.quality += this.QUALITY_CHANGE; }
  }

  _fiveDaysOrLessCheck() {
    if (this.sellIn <= 5) { this.quality += this.QUALITY_CHANGE; }
  }

  _pastSellInCheck() {
    if (this.sellIn <= 0) { this.quality = 0; }
  }
}

module.exports.TicketItem = TicketItem;
