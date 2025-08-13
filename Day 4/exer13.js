function frequencyCounter(str) {
    var freq = {};
    
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }
    return freq;
}

console.log(frequencyCounter("banana"));
