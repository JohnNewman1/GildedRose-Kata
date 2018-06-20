const extractItemProperties = (items) => {
  const properties = {
    sellIns: [],
    qualities: [],
  };

  for (let i = 0; i < items.length; i++) {
    properties.sellIns.push(items[i].sellIn);
    properties.qualities.push(items[i].quality);
  }

  return properties;
};

module.exports.extractItemProperties = extractItemProperties;
