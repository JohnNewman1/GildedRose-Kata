const { Item } = require('./item');

class StandardItem extends Item {
  updateSellIn() {
    this.sellIn -= 1;
  }
}

module.exports.StandardItem = StandardItem;
