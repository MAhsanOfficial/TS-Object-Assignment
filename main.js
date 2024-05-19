// // // // Assignments 1
// type employee = {
//     name:string,
//     department:string,
//     role:string,
//     contact:{holdPhone:string,emailInfo:string}
//      skills?:string[],
// }
// type role = "Manager" | "Engineer" | "INtern"
let T_shirt = {
    name: "Simple T-Shirt",
    price: 500,
    color: "Black",
    inventory: { stock: 60, colorOptions: ["Black", "Yellow", "Red", "Blue"] },
    changeColor(newColor) {
        return newColor;
    }
};
let myShirt = {
    name: "Sparkings",
    color: "Black",
    price: 1200,
    inventory: { stock: 200, colorOptions: ["Red", "Purple", "Silver", "Green"] },
    changeColor(newColor) {
        if (newColor = "Red") {
            myShirt.price = myShirt.price + (myShirt.price * 10 / 100);
        }
        else if (newColor = "Blue") {
            myShirt.price = myShirt.price + (myShirt.price * 5 / 100);
        }
        return newColor;
    }
};
myShirt.changeColor("Red");
console.log(`The Price Of Red Shirt Is : ${myShirt.price}`);
myShirt.changeColor("Blue");
console.log(`The Price Of Blue Shirt Is : ${myShirt.price}`);
export {};
