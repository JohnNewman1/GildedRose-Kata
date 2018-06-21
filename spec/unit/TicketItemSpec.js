const { TicketItem } = require('../../src/ticketItem');

describe('TicketItem', () => {
  let ticketItem;
  const name = 'Backstage passes to a TAFKAL80ETC concert';
  const sellIn = 12;
  const quality = 27;

  beforeEach(() => {
    ticketItem = new TicketItem(name, sellIn, quality);
    ticketItem.updateProperties();
  });

  it('returns the correct name', () => {
    expect(ticketItem.name).toEqual(name);
  });

  it('calls the updateProperties method on the super class', () => {
    expect(ticketItem.sellIn).toEqual(sellIn - 1);
  });

  it('increases in quality by one when sellIn > 10', () => {
    expect(ticketItem.quality).toEqual(quality + 1);
  });

  it('increases in quality by two when sellIn <= 10', () => {
    for (let i = 0; i < 2; i++) { ticketItem.updateProperties(); }

    expect(ticketItem.quality).toEqual(quality + 4);
  });

  it('increases in quality by three when sellIn <= 5', () => {
    for (let i = 0; i < 7; i++) { ticketItem.updateProperties(); }

    expect(ticketItem.quality).toEqual(quality + 15);
  });

  it('prevents the quality exceeding 50', () => {
    for (let i = 0; i < 11; i++) { ticketItem.updateProperties(); }

    expect(ticketItem.quality).toEqual(50);
  });

  it('prevents the quality exceeding 50 different start point', () => {
    const newTicketItem = new TicketItem(name, 6, 45);
    for (let i = 0; i < 3; i++) { newTicketItem.updateProperties(); }

    expect(newTicketItem.quality).toEqual(50);
  });
});
