var name = [3, 5, 7, 3, 2, 5, 9, 1, 5];
var uniqueName = [];

for (let i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
        
    }
    
}
console.log(uniqueName);