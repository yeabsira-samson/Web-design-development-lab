function joinArrays(arr1, arr2) {
    var mergedMap = {}; 
    var result = [];

    for (var i = 0; i < arr1.length; i++) {
        var obj = arr1[i];
        mergedMap[obj.id] = {}; 

        for (var key in obj) {
            mergedMap[obj.id][key] = obj[key];
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        var obj = arr2[i];
        if (mergedMap[obj.id] === undefined) {
            mergedMap[obj.id] = {};
        }
        for (var key in obj) {
            mergedMap[obj.id][key] = obj[key]; 
        }
    }
    for (var id in mergedMap) {
        result[result.length] = mergedMap[id];
    }
    for (var i = 0; i < result.length - 1; i++) {
        for (var j = 0; j < result.length - i - 1; j++) {
            if (result[j].id > result[j + 1].id) {
                var temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}
var arr1 = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
];

var arr2 = [
    { id: 2, age: 25 },
    { id: 3, name: "Bob" }
];

console.log(joinArrays(arr1, arr2));
