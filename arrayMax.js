var marks = [45, 81, 63, 98, 17, 33];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
        
    } 
}
console.log("Height value is: ", max);
