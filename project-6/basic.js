//Encapsulation
class Student{
    constructor(name){
        (this.name=""),(this.grid=""),(this.subject="");
    }
    setData(name,grid,subject){
        (this.name=name),(this.grid=grid),(this.subject=subject);
    }
    getData(){
        console.log(`My name is ${this.name},My GRID is ${this.grid} and I learning ${this.subject}`);
        
    }
}
let obj=new Student();
obj.setData("sahil","9017","Javascript");
obj.getData();

//Single inheritance
class Suzukicar{
    suzuki(){
        console.log("This is Suzuki car");
        
    }
}
class Hyundaicar extends Suzukicar{
    hyundai(){
        console.log("This is hyundai car");
    }
}
let obj1=new Hyundaicar();
obj1.suzuki();
obj1.hyundai();

//multilevel inheritance
class Animal{
    dog(){
        console.log("This is dog");
    }
}
class cat extends Animal{
    cat(){
        console.log("This is cat");
    }
}
class cow extends cat{
    cow(){
        console.log("This is cow");
        
    }
}
let obj2=new cow();
obj2.dog();
obj2.cat();
obj2.cow();

//hierarchical inheritance
class bike{
    constructor(){
        console.log("This is bike");
    }
    Hero(){
        console.log("This is Hero bike");
        
    }
}
class Bajaj extends bike{
    bajaj(){
        console.log("This is Bajaj bike");
        
    }
}
class TVS extends bike{
    TVS(){
        console.log("This is TVS bike");
        
    }
}
let obj3=new Bajaj();
let obj4=new TVS();
obj3.bajaj();
obj3.Hero();
obj4.TVS();
obj4.Hero();

//polymorphism
class Add{
    sum(){
        let a=10;
        let b=20;
        let c=a+b;
        console.log(`Addition is ${c}`);
    }
}
class Mul{
    sum(){
        let a=20;
        let b=2;
        let c=a*b;
        console.log(`Multiplication is ${c}`);
    }
}
let obj5=new Add();
let obj6=new Mul();
obj5.sum();
obj6.sum();
