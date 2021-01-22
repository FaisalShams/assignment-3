function hotelCost(costOfFifteenDays){
    var totalCost = costOfFirstTenDays + costOfLastFiveDays;
    return totalCost;
}
var costOfFirstTenDays = 10 * 100;
var costOfLastFiveDays = 5 * 80;
var totalCost = hotelCost(costOfFirstTenDays, costOfLastFiveDays);
console.log(totalCost);
