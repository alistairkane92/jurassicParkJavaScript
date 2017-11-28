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
    
//doesnt return dino babies giving birth
    getEstimatedOffspring(years){
        var total = 0;

        for(dino of this.enclosure){
            total += dino.offspringCount * years;
        }

        return total;
    }
}

module.exports = JurassicPark;
