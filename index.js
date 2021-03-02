// Add your Circle class here
class Circle{
    constructor( radius ) {
        this.radius = radius;
      }

    get diameter(){
        return this.radius * 2
    }

    set diameter(num){
        return this.radius = num/2
    }

    get circumference(){
        return this.diameter * Math.PI
    }
    
    set circumference(num){
        return this.diameter = num/Math.PI
    }

    get area(){
        return (this.radius**2) * Math.PI
    }
}