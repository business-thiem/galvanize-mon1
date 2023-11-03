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

let box = new Shape(4)

box.getSideCount();