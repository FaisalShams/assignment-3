// https://github.com/FaisalShams/assignment-3
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var dhakaToManikganj = kilometerToMeter(60);
console.log(dhakaToManikganj);
var dhakaToNarayanganj = kilometerToMeter(34);
console.log(dhakaToNarayanganj);
var dhakaToSavar = kilometerToMeter(20);
console.log(dhakaToSavar);




function budgetCalculator(watch, mobile, laptop){
    var amountOfMoney = watch + mobile + laptop;
    return amountOfMoney
}
var watch = 50 * 3;
var mobile = 100 * 5;
var laptop = 500 * 2;
var amountOfMoney = budgetCalculator(watch, mobile, laptop);
console.log(amountOfMoney);




function hotelCost(costOfFifteenDays){
    var totalCost = costOfFirstTenDays + costOfLastFiveDays;
    return totalCost;
}
var costOfFirstTenDays = 10 * 100;
var costOfLastFiveDays = 5 * 80;
var totalCost = hotelCost(costOfFirstTenDays, costOfLastFiveDays);
console.log(totalCost);




let arr = ["Rahim", "Joy", "Asaduzzaman", "Shakib"]
function megaFriend(arr){
    let longestName = arr[0];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].length > longestName.length) {
            longestName = arr[i];
            
        }
        
    }
    return longestName;
}
console.log(megaFriend(arr));