GildedRose Refactoring Kata
===========================

[Summary](#summary) | [Specification](#specification) | [Getting started](#getting-started) | [Approach](#approach) | [More](#further-information)

## Summary

A solution to the GildedRose Kata where you have been provided with legacy code for an inventory system that
updates the inventory at the end of each day based on a set of given rules. The challenge is to keep certain elements
of the code the same whilst improving the structure so that you can then easily add a new feature.

This app was created over a two day period as part of my development on the Makers Academy course.

## Specification

#### Requirements

Using the existing codebase as a starting point refactor the code so that a new feature can easily be added.
This is a well known kata developed by Terry Hughes. The rules of the challenge can be found [here](https://github.com/NotMyself/GildedRose).

* Do not make changes to the Item class or the items property on the main GildedRose class
* Add a new feature - “Conjured” items degrade in Quality twice as fast as normal items
* Try to keep the existing interface for the main class the same:
    - Create items with ```new Item(<name>, <sellIn>, <quality>)```
    - Initialise the main class ```new <Main Class>(items)```
    - Update the inventory ```<Main Class>.updateQuality()```

## Getting started

#### Installation

This application has been made in Javascript using Node to run it and npm as the package manager to simplify the build process and
include all necessary dependencies. If you do not have Node installed it is recommended you
do so ([Node](https://nodejs.org/en/download/)). To get started please follow the
subsequent steps.

```
$ git clone https://github.com/georgesykes86/GildedRose-Kata
$ cd <repo name>
$ npm install
```

#### How to use

The app has a predefined demo which can be found in the app.js file in the root. You can run this from the command line to see
an example output.

```
$ node app.js
```

![Imgur](https://i.imgur.com/dycwvUU.png)

The app can also be run from the command line as follows.
```
> const { Shop } = require('./src/shop');
> const { Item } = require('./src/item');
> let items = [];
> items.push(new Item('Aged Brie', 5, 10));
> items.push(new Item('New Item', 5, 10));
> items.push(new Item('Sulfuras, Hand of Ragnaros', 5, 10));
> let shop = new Shop(items);
> shop.items
[ MaturingItem {
  name: 'Aged Brie',
  sellIn: 5,
  quality: 10,
  QUALITY_CHANGE: 1,
  DOUBLE_QUALITY_CHANGE: 2,
  MAX_QUALITY: 50 },
StandardItem {
  name: 'New Item',
  sellIn: 5,
  quality: 10,
  QUALITY_CHANGE: 1,
  DOUBLE_QUALITY_CHANGE: 2 },
SulfurasItem {
  name: 'Sulfuras, Hand of Ragnaros',
  sellIn: 5,
  quality: 10,
  QUALITY_CHANGE: 1,
  DOUBLE_QUALITY_CHANGE: 2 } ]
> shop.updateQuality()
[ MaturingItem {
    name: 'Aged Brie',
    sellIn: 4,
    quality: 11,
    QUALITY_CHANGE: 1,
    DOUBLE_QUALITY_CHANGE: 2,
    MAX_QUALITY: 50 },
  StandardItem {
    name: 'New Item',
    sellIn: 4,
    quality: 9,
    QUALITY_CHANGE: 1,
    DOUBLE_QUALITY_CHANGE: 2 },
  SulfurasItem {
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 5,
    quality: 10,
    QUALITY_CHANGE: 1,
    DOUBLE_QUALITY_CHANGE: 2 } ]
```

## Approach

#### Methodology
The ambition for this app was to take the existing codebase and refactor it into a more understandable, maintainable and
extendable structure. The process I followed was to begin by creating a number of feature tests which benchmarked the existing functionality.
These feature tests were designed to capture the normal behaviour as well as edge cases.
Once the feature tests were in place I began by refactoring the existing code within the existing objects. This involved extracting methods to DRY
out the code and restructuring the algorithm to reduce the number of checks that needed to be performed. This revealed a large amount of functionality
where the main GildedRose class was having to manipulate the properties of different items. In order to prevent this I extracted a number of new classes
that extended the base Item class but added their own functionality for updating their properties with a common updateProperties interface method.

The image below shows the UML diagram showing the relationships between the new objects.

![Imgur](https://i.imgur.com/dExdMmJ.png)

In addition to the strategy above I have started to explore a different implementation using the Strategy Design Pattern. This can be found by switching to
the Strategy_Pattern branch of this repository.

#### Technologies
The app was made using Javascript with the EC6 class syntax. Node was used to run the app and npm for installing packages. Testing was performed using
Jasmine with ESLint as a linter using the AirBnB config and Istanbul for code coverage.

#### Testing
The development process followed a TDD approach with the development of feature tests to assess the
end to end functionality and unit tests to test each of the components in isolation.

The tests can be run from the command line using ```npm run test```

One concern I have about my tests are that they rely heavily on the starting values entered during set up.
There is a risk that someone could change a number by accident and this would mean certain edge cases might no
be covered any more. I would like to develop parameterised tests that are immune from this if given more time.

## Further Information

#### Areas for development
* Input checking for object initialisation
* Make tests more robust with parameterisation
* Have the logic that transforms standard Items into their updatable equivalents search for keywords such as 'Conjured' and 'Sulfuras'

#### License
This app is free to use but please credit in your own application if you reuse code directly

#### Contributors
This project is the solo effort by George Sykes.
