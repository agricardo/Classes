function Automovile(wheels){
    this.wheels = wheels
    this.setColor = ()=>{
        this.color = color
    }
    this.getColor = ()=>{
        return this.color
    }
}

function Sedan(){
    this.doors = 4

}


Sedan.prototype = new Automovile()
const sedan = new Sedan()
console.log(sedan2.doors)




function Camry(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    }

    Camry.prototype = new Sedan("Toyota", "Camry", 2010)
    const camry = new Camry()
    console.log(camry.wheels)
    console.log(camry.doors)
    camry.year = 2010
    console.log(camry.year)


    class Automovile{
        constructor(wheels){
            this.wheels
        }
        setColor(color){
            this.color = color
        }
        getColor(){
            return this.color
        }
    }
    class Motorcycle extends Automovile{
        constructor(make, model, year){
            super(2)
            this.make = make
            this.model = model
            this.year = year
        }

    }


    // class Sedan extends Automovile{
    //     constructor(make, model, year){
    //         super(4)
    //         this.make = make
    //         this.model = model
    //         this.year = year
    //     }

    // }
// class Maybach extends Sedan{
//     constructor(){
//         super('Mercedez', 'Maybach', 2012)
//     }
// }
    