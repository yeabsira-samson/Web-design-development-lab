function longestWord(sentence) {
    var longest = "";
    var currentWord = "";
    
    for (var i = 0; i <= sentence.length; i++) {
        var ch = sentence[i];
        
        if (ch !== " " && ch !== undefined) {
            currentWord += ch;
        } else {
            if (currentWord.length > longest.length) {
                longest = currentWord;
            }
            currentWord = "";
        }
    }
    return longest;
}

console.log(longestWord("I love programming in JavaScript")); 
