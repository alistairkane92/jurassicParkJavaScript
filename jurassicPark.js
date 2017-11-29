var Dinosaur = require("./dinosaur.js");

var JurassicPark = function(){
    this.enclosure = []
}

JurassicPark.prototype = {
    add(dinosaur){
        this.enclosure.push(dinosaur);
    },

    remove(type){
        var newEnclosure = [];

        for(dino of this.enclosure){
            if(dino.type !== type){
                newEnclosure.push(dino);
            }
         }

         this.enclosure = newEnclosure;
    },

    getByOffspringAmount(amount){
        var newEnclosure = [];

        for(dino of this.enclosure){
            if(dino.offspringCount < amount){
                newEnclosure.push(dino);
            }
        }

        return newEnclosure;
    },

    getEstimatedOffspring(years){
        baby = new Dinosaur("baby", dino.type, dino.offspringCount);
    //provided each dino baby has the same fertility rate?
        for (dino of this.enclosure){
            add(baby) * (dino.offspringCount * years);
        }

        //doesnt return dino babies giving birth
        //var total = 0;
        //
        // for(dino of this.enclosure){
        //     total += dino.offspringCount * years;
        // }
        //return total;
    }
}

module.exports = JurassicPark;
