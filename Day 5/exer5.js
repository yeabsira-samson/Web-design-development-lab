//exer 1
class Vehicle{
type;
speed;
constructor(type,speed){
    this.type=type;
    this.speed=speed;
}
move(){
    console.log(Vehicle.type);
    console.log(Vehicle.speed);
}
}
var v= new Vehicle('BMW','185')
console.log(v);
//exr 2
class pet{
    name;
    type;
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    describe(){
        console.log(pet.name);
    }
}
class dog extends pet{
    breed;
    constructor(name,type,breed){
        super(name,type);
        this.breed=breed;
    }
    describe(){
        console.log(dog.breed);
    }
}
var f = new dog('bobby','g','h')
console.log(f);