const { Item } = require('./item');

class StandardItem extends Item {
  updateProperties() {
    this._updateSellIn();
    this._updateQuality();
  }

  _updateSellIn() {
    this.sellIn -= 1;
  }

  _updateQuality() {
    this.quality -= 1;
  }
}

module.exports.StandardItem = StandardItem;
