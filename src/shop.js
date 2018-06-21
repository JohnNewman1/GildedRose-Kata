class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      item.updateProperties();
    });

    return this.items;
  }
}

module.exports.Shop = Shop;
