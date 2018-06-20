class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (Shop._isNotZeroQuality(item)) {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (Shop._isNotMaxQuality(item)) {
          item.quality = item.quality + 1;
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (Shop._isNotMaxQuality(item)) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (Shop._isNotMaxQuality(item)) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name !== 'Aged Brie') {
          if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (Shop._isNotZeroQuality(item)) {
              if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (Shop._isNotMaxQuality(item)) {
            item.quality = item.quality + 1;
          }
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

}

module.exports.Shop = Shop;
