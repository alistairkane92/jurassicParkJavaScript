var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){
    beforeEach(function(){
        john = new Dinosaur("John", "Velociraptor", 2);
        steve = new Dinosaur("Steve", "Steggosaurus", 4);
    })

    it("should have a name", function(){
        assert.strictEqual(john.name, "John");
    })

    it("should have a type", function(){
        assert.strictEqual(john.type, "Velociraptor");
    })

    it("should have a number of offspring per year", function(){
        assert.strictEqual(john.offspringCount, 2);
    })
})
