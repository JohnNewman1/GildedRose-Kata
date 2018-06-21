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
  }

  _isPastSellIn() {
    return this.sellIn <= 0;
  }
}

module.exports.StandardItem = StandardItem;
