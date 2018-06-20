class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
        Shop._decrementQuality(item);
      } else {
        if (Shop._isNotMaxQuality(item)) {
          Shop._incrementQuality(item);
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
                Shop._incrementQuality(item);
            }
            if (item.sellIn < 6) {
              Shop._incrementQuality(item);
            }
          }
        }
      }
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        Shop._decrementSellIn(item);
      }
      if (item.sellIn < 0) {
        if (item.name !== 'Aged Brie') {
          if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            Shop._decrementQuality(item);
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          Shop._incrementQuality(item);
        }
      }
    })

    return this.items;
  }

  static _isNotZeroQuality(item) {
    return item.quality > 0;
  }

  static _isNotMaxQuality(item) {
    return item.quality < 50;
  }

  static _decrementQuality(item) {
    if (Shop._isNotZeroQuality(item)) {
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.quality -= 1;
      }
    }
  }

  static _incrementQuality(item) {
    if (Shop._isNotMaxQuality(item)) {
      item.quality += 1;
    }
  }

  static _decrementSellIn(item) {
    item.sellIn -= 1;
  }

}

module.exports.Shop = Shop;
