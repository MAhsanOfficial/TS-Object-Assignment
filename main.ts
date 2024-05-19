// // // Assignments 1

type employee = {
    name:string,
    department:string,
    role:string,
    contact:{holdPhone:string,emailInfo:string}
     skills?:string[],
}
type role = "Manager" | "Engineer" | "INtern"


// // // Assignment 02

interface Engine {
    horsepower: number;
}
type car = { 
    getHorsepower:()=> number,
   engine:Engine;
}
const myCar :car ={
 engine:{
    horsepower:300
 },
getHorsepower(){
    return this.engine.horsepower
}
}
console.log(myCar.getHorsepower());



// // // Assignment 03

type product = {
   price:number,
   name:string,
   color:string
   changeColor:(newColor:string)=>string
   inventory:{stock: number,colorOptions?:string[]}
}
let T_shirt:product = {
   name:"Simple T-Shirt",
   price:500,
   color:"Black",
   inventory:{stock:60,colorOptions:["Black","Yellow","Red","Blue"]},
   changeColor(newColor:string){
           return newColor
   }
}
let myShirt : product ={
   name:"Sparkings",
   color:"Black",
   price:1200,
   inventory:{stock:200,colorOptions:["Red","Purple","Silver","Green"]},
   changeColor(newColor :string){
      if(newColor = "Red"){
       myShirt.price = myShirt.price + (myShirt.price *10/100) 
      }else if(newColor = "Blue"){
         myShirt.price = myShirt.price + (myShirt.price *5/100) 
        }
        return newColor
   }
}
myShirt.changeColor("Red")
console.log(`The Price Of Red Shirt Is : ${myShirt.price}`);
myShirt.changeColor("Blue")
console.log(`The Price Of Blue Shirt Is : ${myShirt.price}`);

