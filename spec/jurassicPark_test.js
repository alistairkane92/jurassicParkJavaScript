var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var JurassicPark = require('../jurassicPark.js');

describe("Jurassic Park", function(){
    beforeEach(function(){
        john = new Dinosaur("John", "Steggosaurus", 0);
        ally = new Dinosaur("Ally", "Triceratops", 1);
        steve = new Dinosaur("Steve", "Triceratops", 4);
        colin = new Dinosaur("Colin", "Tyrannosaurus", 8);

        jurassicPark = new JurassicPark();
    })

    it("should have an empty enclosure", function(){
        assert.strictEqual(jurassicPark.enclosure.length, 0);
    })

    it("should be able to add dinosaurs", function(){
        jurassicPark.add(ally);
        jurassicPark.add(colin);
        assert.strictEqual(jurassicPark.enclosure.length, 2);
    })

    it("should be able to remove all dinosaurs of a type", function(){
        jurassicPark.add(ally);
        jurassicPark.add(colin);
        jurassicPark.add(steve);
        jurassicPark.add(john);

        jurassicPark.remove("Triceratops");
        assert.strictEqual(jurassicPark.enclosure.length, 2);
    })

    it("should be able to get by offspringamount", function(){
        jurassicPark.add(ally);
        jurassicPark.add(colin);
        jurassicPark.add(steve);
        jurassicPark.add(john);

        assert.strictEqual(jurassicPark.getByOffspringAmount(2).length, 2);
    })

    it("should be able to calculate offspring after a year", function(){
        jurassicPark.add(colin);

        assert.strictEqual(jurassicPark.getEstimatedOffspring(1), 8);
    })

    it("should be able to calculate offspring after two years", function(){
        jurassicPark.add(colin);

        assert.strictEqual(jurassicPark.getEstimatedOffspring(2), 74);
    })

    it("should be able to calculate offspring after one year with two dinos", function(){
        jurassicPark.add(colin);
        jurassicPark.add(steve);

        assert.strictEqual(jurassicPark.getEstimatedOffspring(1), 12);
    })

    it("should be able to calculate offspring after two years with two dinos", function(){
        jurassicPark.add(colin);
        jurassicPark.add(steve);

        assert.strictEqual(jurassicPark.getEstimatedOffspring(2), 24);
    })
})
