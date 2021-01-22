function budgetCalculator(watch, mobile, laptop){
    var amountOfMoney = watch + mobile + laptop;
    return amountOfMoney
}
var watch = 50 * 3;
var mobile = 100 * 5;
var laptop = 500 * 2;
var amountOfMoney = budgetCalculator(watch, mobile, laptop);
console.log(amountOfMoney);