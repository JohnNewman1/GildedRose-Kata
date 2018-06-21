const { StandardItem } = require('./standardItem');

class MaturingItem extends StandardItem {
  _updateQuality() {
    this.quality += (this._isPastSellIn()) ? this.NEW_QUALITY_CHANGE : this.QUALITY_CHANGE;
  }
}

module.exports.MaturingItem = MaturingItem;
