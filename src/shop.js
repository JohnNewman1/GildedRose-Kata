class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') return;
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn <= 0) {
          item.quality = 0;
        } else if (item.sellIn < 6) {
          Shop._incrementQuality(item, 3);
        } else if (item.sellIn < 11) {
          Shop._incrementQuality(item, 2);
        } else {
          Shop._incrementQuality(item);
        }
      } else if (item.name === 'Aged Brie') {
        if (item.sellIn <= 0) {
          Shop._incrementQuality(item, 2);
        } else {
          Shop._incrementQuality(item);
        }
      } else {
        if (item.sellIn <= 0) {
          Shop._decrementQuality(item, 2);
        } else {
          Shop._decrementQuality(item);
        }
      }
      Shop._decrementSellIn(item);
    });

    return this.items;
  }

  static _isNotZeroQuality(item) {
    return item.quality > 0;
  }

  static _isNotMaxQuality(item) {
    return item.quality < 50;
  }

  static _decrementQuality(item, amount = 1) {
    if (Shop._isNotZeroQuality(item)) {
      item.quality -= amount;
    }
  }

  static _incrementQuality(item, amount = 1) {
    if (Shop._isNotMaxQuality(item)) {
      item.quality += amount;
    }
  }

  static _decrementSellIn(item) {
    item.sellIn -= 1;
  }

}

module.exports.Shop = Shop;
