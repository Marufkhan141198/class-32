//Sabir has total 500 tk. He went to bazar and purchased 5 eggs and 2 kitkats. Each egg price 15 tk and
//kitkat 50 tk. Find the value of remaining balance.

let totalMoney = 500;
let egg = 5;
let kitkat = 2;
let eachEggPrice = 15;
let eachkitKatprice = 40;
let totalEggPrice = egg*eachEggPrice;
let totalKitkatprice = kitkat*eachkitKatprice;
let totalCost = totalEggPrice+totalKitkatprice;
let remaining = totalMoney-totalCost;
console.log(remaining);

/*Mashrif khan had 100 tk. His uncle gave him 50 tk and his mother gave 50 tk. Then he go to shop and 
purchased 2 Pizza. Each Pizzas price 60 tk. He gave her sister 30 tk . Find the value of remaining balance.*/
let totalHas = 100;
let uncle = 50;
let mother = 50;
let pizza = 2;
let eachPizza = 60;
let sisterGave = 30;
let totalGave = uncle+mother;
let totalMoney1 = totalHas+totalGave;
let totalPizza = pizza*eachPizza;
let totalSpent = totalPizza+sisterGave;
let remaining1 = totalMoney1-totalSpent; 
console.log(remaining1);



 