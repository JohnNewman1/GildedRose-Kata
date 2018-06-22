const { MaturingItem } = require('./maturingItem');
const { StandardItem } = require('./standardItem');
const { SulfurasItem } = require('./sulfurasItem');
const { ConjuredItem } = require('./conjuredItem');
const { TicketItem } = require('./ticketItem');

class Shop {
  constructor(items = []) {
    this.items = items;
    this.classMap = {
      Default: StandardItem,
      'Aged Brie': MaturingItem,
      'Sulfuras, Hand of Ragnaros': SulfurasItem,
      'Conjured Item': ConjuredItem,
      'Backstage passes to a TAFKAL80ETC concert': TicketItem,
    };
    this._transformItems();
  }
  updateQuality() {
    this.items.forEach((item) => {
      item.updateProperties();
    });
    return this.items;
  }

  _transformItems() {
    const newItems = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const ConstructorClass = this.classMap[item.name] || this.classMap.Default;
      newItems.push(new ConstructorClass(item.name, item.sellIn, item.quality));
    }
    this.items = newItems;
  }
}

module.exports.Shop = Shop;
