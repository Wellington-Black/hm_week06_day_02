const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let velociraptor;
  let carnotaurus;
  let diplodocus;
  let triceratops;

  beforeEach(function () {
    park = new Park('Jurassic Park', 100);

    velociraptor = new Dinosaur('velociraptor', 'carnivorous', 50);
    carnotaurus = new Dinosaur('carnotaurus', 'carnivorous', 30);
    diplodocus = new Dinosaur('diplodocus', 'herbivorous', 70);
    triceratops = new Dinosaur('triceratops', 'herbivorous', 90);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(velociraptor);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [velociraptor]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    const actual = park.dinosaurs;
    park.removeDinosaur(velociraptor);
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(velociraptor);
    park.addDinosaur(carnotaurus);
    park.addDinosaur(diplodocus);
    park.addDinosaur(triceratops);

    const actual = park.atractMoreViewsDino();
    assert.strictEqual(actual,triceratops);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
