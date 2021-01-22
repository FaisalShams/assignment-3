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