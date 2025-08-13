function sumOfDigits(num) {
    var sum = 0;
    var n = num;
        
    while (n > 0) {
        var digit = n % 10;
        sum += digit;
        n = (n - digit) / 10; 
    }
    return sum;
}

console.log(sumOfDigits(1234)); 
