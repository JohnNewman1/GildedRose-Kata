const { MaturingItem } = require('./maturingItem');

class TicketItem extends MaturingItem {
  _updateQuality() {
    this.quality += (this._isTenDaysOrLess()) ? 2 : 1;
  }

  _isTenDaysOrLess() {
    return this.sellIn <= 10;
  }
}

module.exports.TicketItem = TicketItem;
