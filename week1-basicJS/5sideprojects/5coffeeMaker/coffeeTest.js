let coffeeMaker = {
    coffeeHot: true,
    coffeeVolume: 8,
    coffeeFull: true,
    isCoffeeFull: function (volume){
        if (coffeeMaker.coffeeVolume === 10){
            coffeeMaker.coffeeFull = true;
            
        } else {
        coffeeMaker.coffeeFull = false;        
        }
    },
    brewCoffee: function (){
        coffeeMaker.coffeeVolume = 10;
        return `Coffee Brewed to ${coffeeMaker.coffeeVolume} cups!`;
    },
    drinkCoffee: function(){
        coffeeMaker.coffeeVolume -= 1
        coffeeMaker.isCoffeeFull()
        console.log(`You drank 1 cup of coffee. Coffee volume is now ${coffeeMaker.coffeeVolume} cups.`)
    }
}
console.log(coffeeMaker.coffeeFull)
console.log(coffeeMaker.drinkCoffee())
console.log(coffeeMaker.coffeeFull)