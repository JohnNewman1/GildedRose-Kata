const { TicketItem } = require('../../src/ticketItem');

describe('TicketItem', () => {
  let ticketItem;
  const name = 'Backstage passes to a TAFKAL80ETC concert';
  const sellIn = 15;
  const quality = 21;

  beforeEach(() => {
    ticketItem = new TicketItem(name, sellIn, quality);
  });

  it('returns the correct name', () => {
    expect(ticketItem.name).toEqual(name);
  });
});
