const { MaturingItem } = require('./maturingItem');

class TicketItem extends MaturingItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.TRIPLE_QUALITY_CHANGE = 3;
  }

  _updateQuality() {
    if (this._isFiveDaysOrLess()) {
      this.quality += this.TRIPLE_QUALITY_CHANGE;
    } else if (this._isTenDaysOrLess()) {
      this.quality += this.DOUBLE_QUALITY_CHANGE;
    } else {
      this.quality += this.QUALITY_CHANGE;
    }
  }

  _isTenDaysOrLess() {
    return this.sellIn <= 10;
  }

  _isFiveDaysOrLess() {
    return this.sellIn <= 5;
  }
}

module.exports.TicketItem = TicketItem;
