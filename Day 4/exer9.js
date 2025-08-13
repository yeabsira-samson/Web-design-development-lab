function removeDuplicates(arr) {
    var seen = {};  
    var result = [];
    var resultIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];

        if (seen[value] == undefined) { 
            seen[value] = true;          
            result[resultIndex] = value; 
            resultIndex++;
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
