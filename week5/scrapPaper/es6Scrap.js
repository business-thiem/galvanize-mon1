//Not finished started this thinking it was a small project

class ViewTracker {

    constructor(show) {
        this.show = show
    }
    
    getShow(show){
        return this.show
    }
    
    trackView = async (views) => {
        getShow()
    }
    
    summary(show){
        
    }

}

class Shape {
    constructor(sides){
        this.sides = sides
    }

    getSideCount = () => {
        console.log(this.sides)
    }
}

// let box = new Shape(4)

// box.getSideCount();


class Game {
    constructor(title, publisher, price){
        this.title = title;
        this.publisher = publisher;
        this.price = price;
    }


    display(){
        console.log(this.title, 'display')
    }

    getTitle = () => {
        console.log(this.title, 'title')
    }

    getPrice = () => {
        console.log(this.price, 'price')
    }
}

let game1 = new Game('COD', 'activision', 60)

game1.display()

game1.getTitle()

// console.log(game1.getTitle())